import { Routes } from '@angular/router';
import { PortfolioComponent } from '@pages/portfolio/portfolio.component';
import { AboutComponent } from '@pages/about/about.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'portfolio', title: 'Portfolio', component: PortfolioComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];
