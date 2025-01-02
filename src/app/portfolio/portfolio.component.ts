import { Component } from '@angular/core';
import { Demo } from '../models/demo';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  demos: Demo[] = [];

  constructor(private demoService: DemoService) {
    this.demoService.getDemos().subscribe({
      next: (value: Demo[]) => (this.demos = value),
      error: (err: any) => console.error(err),
    });
  }
}
