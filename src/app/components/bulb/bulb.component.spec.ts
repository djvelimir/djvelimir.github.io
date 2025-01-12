import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbComponent } from './bulb.component';

describe('BulbComponent', () => {
  let component: BulbComponent;
  let fixture: ComponentFixture<BulbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BulbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
