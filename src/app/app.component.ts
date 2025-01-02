import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HolidayService } from './services/holiday.service';
import { SnowflakesComponent } from './snowflakes/snowflakes.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SnowflakesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'djvelimir.github.io';
  isNewYearHolidaySeason: boolean = false;

  constructor(private holidayService: HolidayService) {
    this.holidayService.isNewYearHolidaySeason().subscribe({
      next: (value: boolean) => (this.isNewYearHolidaySeason = value),
      error: (err: any) => console.error(err),
    });
  }
}
