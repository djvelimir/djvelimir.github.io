import { Routes } from '@angular/router';
import { PortfolioComponent } from '@pages/portfolio/portfolio.component';
import { AboutComponent } from '@pages/about/about.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { DownloadComponent } from '@pages/download/download.component';
import { MinesweeperComponent } from '@pages/download/minesweeper/minesweeper.component';
import { TetrisComponent } from '@pages/download/tetris/tetris.component';
import { MyRadioWaveComponent } from '@pages/download/my-radio-wave/my-radio-wave.component';

const author = 'Velimir Đurković';

export const routes: Routes = [
  {
    path: 'portfolio',
    title: `${author} | Portfolio`,
    component: PortfolioComponent,
  },
  {
    path: 'download',
    title: `${author} | Download`,
    component: DownloadComponent,
    children: [
      {
        path: 'minesweeper',
        title: `${author} | Download - Minesweeper`,
        component: MinesweeperComponent,
      },
      {
        path: 'tetris',
        title: `${author} | Download - Tetris`,
        component: TetrisComponent,
      },
      {
        path: 'my-radio-wave',
        title: `${author} | Download - My Radio Wave`,
        component: MyRadioWaveComponent,
      },
      { path: '', redirectTo: 'minesweeper', pathMatch: 'full' }, // default subpage
    ],
  },
  {
    path: 'about',
    title: `${author} | About`,
    component: AboutComponent,
  },
  {
    path: 'contact',
    title: `${author} | Contact`,
    component: ContactComponent,
  },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  {
    path: '**',
    title: `${author} | Page Not Found`,
    component: PageNotFoundComponent,
  },
];
