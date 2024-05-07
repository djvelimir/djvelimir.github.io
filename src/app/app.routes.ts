import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', title: 'Home', component: HomeComponent },
    { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];
