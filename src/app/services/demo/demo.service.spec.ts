import { TestBed } from '@angular/core/testing';

import { DemoService } from './demo.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('DemoService', () => {
  let service: DemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(DemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
