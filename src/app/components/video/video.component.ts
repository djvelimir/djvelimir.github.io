import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent implements OnChanges {
  @Input() rawUrl = '';
  videoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rawUrl'] && this.rawUrl) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.rawUrl
      );
    }
  }
}
