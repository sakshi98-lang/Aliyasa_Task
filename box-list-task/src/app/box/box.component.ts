import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-box',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})
export class BoxComponent {

  @Input() number!: number;
  @Input() title!: string;
  @Output() delete = new EventEmitter<void>();

  box:any = []

  constructor(
    private router : Router
  ) {}

  ngOnInit(): void {
  }

  onDelete(): void {
    this.delete.emit();
  }

  viewDetails(boxId: number): void {
    this.router.navigate(['/box-details', boxId]);
  }

}
