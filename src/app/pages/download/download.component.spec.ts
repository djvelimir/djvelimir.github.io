import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadComponent } from './download.component';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('DownloadComponent', () => {
  let component: DownloadComponent;
  let fixture: ComponentFixture<DownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadComponent],
      providers: [provideNoopAnimations(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
