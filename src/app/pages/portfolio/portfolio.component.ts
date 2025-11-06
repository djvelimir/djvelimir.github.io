import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Demo } from '@models/demo';
import { DemoService } from '@services/demo/demo.service';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  private demoService = inject(DemoService);

  demos: Demo[] = [];

  constructor() {
    this.demoService.getDemos().subscribe({
      next: (value) => (this.demos = value),
      error: (err) => console.error(err),
    });
  }
}
