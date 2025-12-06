import { Component, Input } from '@angular/core';
import { VideoComponent } from '../video/video.component';
import { DownloadProductItem } from '@app/models/download-product-item';

@Component({
  selector: 'app-download-product',
  imports: [VideoComponent],
  templateUrl: './download-product.component.html',
  styleUrl: './download-product.component.scss',
})
export class DownloadProductComponent {
  @Input() list: DownloadProductItem[] = [];
}
