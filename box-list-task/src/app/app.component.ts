import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxListComponent } from './box-list/box-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BoxListComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'box-list-task';
}
