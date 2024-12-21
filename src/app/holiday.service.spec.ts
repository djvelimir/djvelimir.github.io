import { TestBed } from '@angular/core/testing';

import { HolidayService } from './holiday.service';

describe('HolidayService', () => {
  let service: HolidayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
