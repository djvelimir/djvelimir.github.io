import { Component } from '@angular/core';
import { VideoComponent } from '../../components/video/video.component';

@Component({
  selector: 'app-download',
  imports: [VideoComponent],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
})
export class DownloadComponent {
  downloadList = [
    {
      title: 'Minesweeper',
      description:
        'Download the Java Swing Minesweeper Game Demo! Ready to play the classic Minesweeper game with a sleek Java Swing interface? This demo brings Minesweeper to your desktop with: smooth tile revealing and mine-flagging gameplay, clean and intuitive user interface, satisfying sound effects to enhance the experience, exciting moments of victory that keep you coming back. No programming needed, just download, launch, and enjoy! Perfect for Minesweeper fans and casual gamers alike. Get the game now and start uncovering those mines!',
      platforms: [
        {
          os: 'Linux',
          title: 'Debian / RPM',
          links: [
            {
              description: 'For Ubuntu, Debian:',
              title: 'minesweeper_1.0.0_amd64.deb',
              url: 'https://drive.google.com/file/d/1Y1cYiggd05p5rx86L4YbZcGkR9zj8JxE/view?usp=share_link',
            },
            {
              description: 'For Fedora, CentOS:',
              title: 'minesweeper-1.0.0-1.x86_64.rpm',
              url: 'https://drive.google.com/file/d/1vyeGsuK2NlJPf4ArCFgG7k_ABdDvpk5S/view?usp=share_link',
            },
          ],
        },
        {
          os: 'macOS',
          title: 'DMG / PKG',
          links: [
            {
              description: 'Standard Installer:',
              title: 'Minesweeper-1.0.0.dmg',
              url: 'https://drive.google.com/file/d/1rUZftETw6Pjrznhh-9qZJ3P41jEBZCGZ/view?usp=share_link',
            },
            {
              description: 'For MDM/IT deployments:',
              title: 'Minesweeper-1.0.0.pkg',
              url: 'https://drive.google.com/file/d/1KV5C7pSeQ4hn_xDfYT_SaHggaXXusWWZ/view?usp=share_link',
            },
          ],
        },
        {
          os: 'Windows',
          title: 'EXE / MSI',
          links: [
            {
              description: 'Quick Installer:',
              title: 'Minesweeper-1.0.0.exe',
              url: 'https://drive.google.com/file/d/1gbkJw3MGjTpNRdw3rzGIICBe0QJGNtNZ/view?usp=share_link',
            },
            {
              description: 'For Admins (silent installs):',
              title: 'Minesweeper-1.0.0.msi',
              url: 'https://drive.google.com/file/d/1CDnjshNg8LrwrKzZvQ0qM5GdV8X-aZRI/view?usp=share_link',
            },
          ],
        },
        // {
        //   os: 'Other OS',
        //   title: 'ZIP Archive',
        //   links: [
        //     {
        //       description: 'Manual install for other platforms.',
        //       title: 'Minesweeper-1.0.0.zip',
        //       url: '',
        //     },
        //   ],
        // },
      ],
      videos: [
        {
          url: 'https://www.youtube.com/embed/LTD4mWuzv8E?rel=0',
        },
        {
          url: 'https://www.youtube.com/embed/nAagu-SdY8M?rel=0',
        },
        {
          url: 'https://www.youtube.com/embed/UHiwIksxJ2A?rel=0',
        },
      ],
    },
  ];
}
