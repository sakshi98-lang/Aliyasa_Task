import { Component } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { BoxComponent } from '../box/box.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-box-details',
  standalone: true,
  imports: [BoxComponent,CommonModule,FormsModule],
  templateUrl: './box-details.component.html',
  styleUrl: './box-details.component.scss'
})
export class BoxDetailsComponent {

  boxes: any = [];

  constructor(private apiService: ApiserviceService,private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.getSquareDetails(id);
    }
  }


  getSquareDetails(id:any): void {
    this.apiService.getRequest(`get_single_square/${id}`).subscribe((data:any) => {
      this.boxes = data.result[0];
      console.log(this.boxes,"this.boxes")
    });
  }

}
