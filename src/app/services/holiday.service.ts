import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  isNewYearHolidaySeason(): Observable<boolean> {
    const currentDate: Date = new Date();
    const currentYear = currentDate.getFullYear();
    const newYearJanuaryEnd = new Date(`${currentYear}-01-04`).getTime();
    const newYearDecemberStart = new Date(`${currentYear}-12-20`).getTime();
    const today = currentDate.getTime();

    return of(newYearDecemberStart <= today || today <= newYearJanuaryEnd);
  }
}
