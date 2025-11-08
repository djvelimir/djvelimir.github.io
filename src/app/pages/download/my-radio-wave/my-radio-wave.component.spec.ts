import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRadioWaveComponent } from './my-radio-wave.component';

describe('MyRadioWaveComponent', () => {
  let component: MyRadioWaveComponent;
  let fixture: ComponentFixture<MyRadioWaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRadioWaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRadioWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
