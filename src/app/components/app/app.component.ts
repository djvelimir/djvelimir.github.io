import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SnowflakesComponent } from '@components/snowflakes/snowflakes.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HolidayService } from '@services/holiday/holiday.service';
import { routeTransition } from '@app/route-transition';

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
  animations: [routeTransition],
})
export class AppComponent {
  isNewYearHolidaySeason = false;

  constructor(
    private holidayService: HolidayService,
    protected route: ActivatedRoute
  ) {
    this.holidayService.isNewYearHolidaySeason().subscribe({
      next: (value) => (this.isNewYearHolidaySeason = value),
      error: (err) => console.error(err),
    });
  }
}
