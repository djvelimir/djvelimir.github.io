import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowflakesComponent } from './snowflakes.component';

describe('SnowflakesComponent', () => {
  let component: SnowflakesComponent;
  let fixture: ComponentFixture<SnowflakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowflakesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SnowflakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
