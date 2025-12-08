import { Component, input } from '@angular/core';
import { VideoComponent } from '../video/video.component';
import { DownloadProductItem } from '@app/models/download-product-item';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-download-product',
  imports: [VideoComponent, NgOptimizedImage],
  templateUrl: './download-product.component.html',
  styleUrl: './download-product.component.scss',
})
export class DownloadProductComponent {
  list = input<DownloadProductItem[]>([]);
}
