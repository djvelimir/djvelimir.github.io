import {
  Component,
  OnChanges,
  SimpleChanges,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent implements OnChanges {
  private sanitizer = inject(DomSanitizer);

  rawUrl = input<string>('');
  videoUrl: SafeResourceUrl | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rawUrl'] && this.rawUrl) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.rawUrl()
      );
    }
  }
}
