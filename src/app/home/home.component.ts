import { Component, inject } from '@angular/core';
import { HolidayService } from '../holiday.service';
import { DataService } from '../data.service';
import { SnowflakesComponent } from '../snowflakes/snowflakes.component';

@Component({
  selector: 'app-home',
  imports: [SnowflakesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private holidayService: HolidayService = inject(HolidayService);
  private dataService: DataService = inject(DataService);

  demoSectionItems = this.dataService.getDemoSectionItems();
  isNewYearHolidaySeason = this.holidayService.isNewYearHolidaySeason();
}
