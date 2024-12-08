import { Routes } from '@angular/router';
import { CreateCvComponent } from './CV/Components/create-cv/create-cv.component';
import { CvListComponent } from './CV/Components/cv-list/cv-list.component';

export const routes: Routes = [
    {
        path: '',
        component: CvListComponent,
        },
    {
    path: 'create',
    component: CreateCvComponent,
    },
    {
    path: 'edit/:id',
    component: CreateCvComponent,
    },
    { path: '**', redirectTo: '' },
];
