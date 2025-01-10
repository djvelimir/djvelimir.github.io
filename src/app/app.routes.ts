import { Routes } from '@angular/router';
import { PortfolioComponent } from '@pages/portfolio/portfolio.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'portfolio', title: 'Portfolio', component: PortfolioComponent },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];
