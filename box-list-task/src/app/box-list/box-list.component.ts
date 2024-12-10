import { Component } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../services/apiservice.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-box-list',
  standalone: true,
  imports: [BoxComponent,CommonModule,FormsModule,RouterModule],
  templateUrl: './box-list.component.html',
  styleUrl: './box-list.component.scss'
})
export class BoxListComponent {

  boxes: any = [];
  newTitle: string = ''; 

  constructor(private apiService: ApiserviceService) {}

  ngOnInit(): void {
    this.loadSquares();
  }

  loadSquares(): void {
    this.apiService.getRequest('get_all_squares').subscribe((data:any) => {
      this.boxes = data.result;
      console.log(this.boxes,"this.boxes")
    });
  }

  addBox(): void {
    if (!this.newTitle.trim()) return;
    this.apiService.postRequest('insert_square',{title : this.newTitle}).subscribe((newSquare) => {
      this.boxes.push(newSquare)
      this.newTitle = '';
      this.loadSquares()
    });
  }

  deleteBox(id: number): void {
    this.apiService.getRequest(`delete_square/${id}`).subscribe((data:any) => {
      this.boxes = this.boxes.filter((box:any) => box.id !== id);
    });
  }
}
