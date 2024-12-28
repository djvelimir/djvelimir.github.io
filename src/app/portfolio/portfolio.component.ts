import { Component, inject } from '@angular/core';
import { HolidayService } from '../holiday.service';
import { DataService } from '../data.service';
import { SnowflakesComponent } from '../snowflakes/snowflakes.component';

@Component({
  selector: 'app-portfolio',
  imports: [SnowflakesComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  private holidayService: HolidayService = inject(HolidayService);
  private dataService: DataService = inject(DataService);

  demoSectionItems = this.dataService.getDemoSectionItems();
  isNewYearHolidaySeason = this.holidayService.isNewYearHolidaySeason();
}
