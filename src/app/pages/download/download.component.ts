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
        "Bring the classic Minesweeper experience to your desktop, now available with easy-to-use installers for all major platforms. Enjoy smooth tile revealing, precise mine flagging, and advanced features like chording for quick gameplay. The interface is clean and intuitive, enhanced with satisfying sound effects, a ticking timer, and optional background sounds. Numbered tiles are color-coded for clear visibility, just like in the original game. Choose your installer, run it, and start playing. Whether you're on Windows, macOS, or Linux, you're just a few clicks away from addictive puzzle-solving fun.",
      platforms: [
        {
          os: 'Linux',
          title: 'DEB / RPM',
          architectures: [
            {
              title: 'x64',
              links: [
                {
                  description: 'For Debian, Ubuntu, Linux Mint:',
                  title: 'minesweeper_1.0.0_amd64.deb',
                  url: 'https://drive.google.com/file/d/1Y1cYiggd05p5rx86L4YbZcGkR9zj8JxE/view?usp=share_link',
                },
                {
                  description: 'For Fedora, RHEL, CentOS:',
                  title: 'minesweeper-1.0.0-1.x86_64.rpm',
                  url: 'https://drive.google.com/file/d/1vyeGsuK2NlJPf4ArCFgG7k_ABdDvpk5S/view?usp=share_link',
                },
              ],
            },
            {
              title: 'ARM64',
              links: [
                {
                  description: 'For Debian, Ubuntu, Linux Mint:',
                  title: 'minesweeper_1.0.0_arm64.deb',
                  url: 'https://drive.google.com/file/d/1cLf5_mzY2d6xAoXoz0Sin8im8UfwkIbD/view?usp=share_link',
                },
                {
                  description: 'For Fedora, RHEL, CentOS:',
                  title: 'minesweeper-1.0.0-1.aarch64.rpm',
                  url: 'https://drive.google.com/file/d/1MWLfLNten5o-UGAm04t61QC8w-OF3cFw/view?usp=share_link',
                },
              ],
            },
          ],
        },
        {
          os: 'macOS',
          title: 'DMG / PKG',
          architectures: [
            {
              title: 'x64',
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
          ],
        },
        {
          os: 'Windows',
          title: 'EXE / MSI',
          architectures: [
            {
              title: 'x64',
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
      instructions: {
        title: 'Installation Instructions',
        platforms: [
          {
            title: 'Linux',
            description:
              "For Linux users, choose the package that matches your distribution. If you're using a Debian-based system like Debian, Ubuntu or Linux Mint, download the .deb file. You can install it using your system's software installer or a terminal with administrative privileges. On RPM-based systems like Fedora, RHEL or CentOS, download the .rpm file and use your system's package manager to install it. After installation, you can launch the game from your applications menu. If the game’s interface appears too small or improperly scaled on high-resolution screens, you can adjust the UI scaling by setting an environment variable. You can add the line export _JAVA_OPTIONS='-Dsun.java2d.uiScale=2.0' to your user’s shell configuration file (like ~/.bashrc or ~/.profile) for a per-user effect, or add it to a global configuration file (such as /etc/environment) to apply system-wide. After making this change, you will need to log out and log back in for the new environment variable to take effect.",
          },
          {
            title: 'macOS',
            description:
              'On macOS, you have the option of using a .dmg or a .pkg installer. If you download the .dmg, open it and drag the Minesweeper app into your Applications folder. If you prefer the .pkg, simply double-click the file to run the guided installer. Once installed, the game will be available in Launchpad or your Applications folder.',
          },
          {
            title: 'Windows',
            description:
              'To install the game on Windows, download either the .exe or .msi installer. Double-click the file to start the installation process and follow the setup wizard. Once installation is complete, you can launch the game from the Start Menu or your desktop.',
          },
        ],
      },
    },
  ];
}
