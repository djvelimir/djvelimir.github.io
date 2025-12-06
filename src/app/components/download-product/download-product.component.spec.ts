import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadProductComponent } from './download-product.component';

describe('DownloadProductComponent', () => {
  let component: DownloadProductComponent;
  let fixture: ComponentFixture<DownloadProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
