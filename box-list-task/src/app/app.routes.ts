import { Routes } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { BoxListComponent } from './box-list/box-list.component';
import { BoxDetailsComponent } from './box-details/box-details.component';

export const routes: Routes = [
    {
        path : 'box',component: BoxComponent
    },
    {
        path : 'box-list',component : BoxListComponent
    },
    {
        path : 'box-details/:id',component : BoxDetailsComponent
    }
];
