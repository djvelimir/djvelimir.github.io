import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('rawUrl', 'https://example.com/video.mp4');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
