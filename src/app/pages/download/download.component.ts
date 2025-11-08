import { Component, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { routeTransition } from '@app/route-transition';

@Component({
  selector: 'app-download',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
  animations: [routeTransition],
})
export class DownloadComponent implements OnInit {
  protected route = inject(ActivatedRoute);

  isRouteTransitionDisabled = true;

  ngOnInit() {
    setTimeout(() => {
      this.isRouteTransitionDisabled = false;
    });
  }
}
