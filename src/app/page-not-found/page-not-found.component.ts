import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
