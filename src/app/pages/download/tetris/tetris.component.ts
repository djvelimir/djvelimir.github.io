import { Component } from '@angular/core';
import { VideoComponent } from '@app/components/video/video.component';

@Component({
  selector: 'app-tetris',
  imports: [VideoComponent],
  templateUrl: './tetris.component.html',
  styleUrl: './tetris.component.scss',
})
export class TetrisComponent {
  downloadList = [
    {
      title: 'Tetris',
      descriptions: [
        "I've developed a classic Tetris clone in Java that captures the original gameplay while adding modern touches for a smoother experience.",
        'It includes scores and levels, ghost pieces, next piece preview, sound effects, and background music for an engaging experience.',
        'You can play using traditional arrow keys, but alternative control schemes are also supported, including WASD, Vim-style H/J/K/L, and pressing Space to instantly drop the current piece for fast-paced play.',
        'Available for Windows, macOS, and Linux with easy installers. Just install and start stacking.',
        'This project was a fun way to dive into real-time game logic while modernizing a timeless classic.',
      ],
      photo: '/pages/download/tetris.webp',
      platforms: [
        {
          os: 'Linux',
          title: 'DEB / RPM',
          architectures: [
            {
              title: 'x64',
              links: [
                {
                  description: 'Debian 13',
                  title: 'tetris_1.1.0_amd64.deb',
                  url: 'https://drive.google.com/file/d/1ZvnDwS8C5RgJU1w7I3LH6Vg2ycP0rfAr/view?usp=share_link',
                },
                {
                  description: 'Ubuntu 24.04',
                  title: 'tetris_1.1.0_amd64.deb',
                  url: 'https://drive.google.com/file/d/1gXdW9F0mKHCDHYDs3xZhLSsZ8nFwHVJ5/view?usp=share_link',
                },
                {
                  description: 'Fedora 42',
                  title: 'tetris-1.1.0-1.x86_64.rpm',
                  url: 'https://drive.google.com/file/d/1j16OIzZ46RInlzuxNFkpbTRP1n2lJ0Cg/view?usp=share_link',
                },
              ],
            },
            {
              title: 'ARM64',
              links: [
                {
                  description: 'Debian 13',
                  title: 'tetris_1.1.0_arm64.deb',
                  url: 'https://drive.google.com/file/d/108w41_KWwivynUMsBtepGTe9Mt9CplIA/view?usp=share_link',
                },
                {
                  description: 'Ubuntu 24.04',
                  title: 'tetris_1.1.0_arm64.deb',
                  url: 'https://drive.google.com/file/d/1FCcZaJWsC772FcXBeYOcwe9vIAE899p9/view?usp=share_link',
                },
                {
                  description: 'Fedora 42',
                  title: 'tetris-1.1.0-1.aarch64.rpm',
                  url: 'https://drive.google.com/file/d/1Qau-mPVavGbNJViKnuUjS9LoQl_Yq4hj/view?usp=share_link',
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
                  description: 'Standard Installer',
                  title: 'Tetris-1.1.0.dmg',
                  url: 'https://drive.google.com/file/d/1VCyZaat-r0JyZxzbxaEpa2b2vm7kGu-q/view?usp=share_link',
                },
                {
                  description: 'For MDM/IT deployments',
                  title: 'Tetris-1.1.0.pkg',
                  url: 'https://drive.google.com/file/d/1SSbZb0-8CMR_fkU-K2YUEz_ybCuCZb2g/view?usp=share_link',
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
                  description: 'Quick Installer',
                  title: 'Tetris-1.1.0.exe',
                  url: 'https://drive.google.com/file/d/1l6X4HuOvbKjIxLGEwPHEvaaKyk9A12vl/view?usp=share_link',
                },
                {
                  description: 'For Admins (silent installs)',
                  title: 'Tetris-1.1.0.msi',
                  url: 'https://drive.google.com/file/d/1Q2SKK4VHVsjxpq6LjV4KyaMO94h3501M/view?usp=share_link',
                },
              ],
            },
          ],
        },
      ],
      videos: [
        {
          url: 'https://www.youtube.com/embed/fQM-9wLAvy4?rel=0',
        },
        {
          url: 'https://www.youtube.com/embed/8yBEOxvcb8w?rel=0',
        },
        {
          url: 'https://www.youtube.com/embed/goYFIU0aoDg?rel=0',
        },
      ],
      instructions: {
        title: 'Installation Instructions',
        platforms: [
          {
            title: 'Linux',
            descriptions: [
              "For Linux users, choose the package that matches your distribution. You can install it using your system's software installer or a terminal with administrative privileges. After installation, you can launch the game from your applications menu.",
              "If the game's interface appears too small or improperly scaled on high-resolution screens, you can adjust the UI scaling by setting an environment variable. You can add the line export _JAVA_OPTIONS='-Dsun.java2d.uiScale=2.0' to your user's shell configuration file (like ~/.bashrc or ~/.profile) for a per-user effect, or add it to a global configuration file (such as /etc/environment) to apply system-wide. After making this change, you will need to log out and log back in for the new environment variable to take effect.",
            ],
          },
          {
            title: 'macOS',
            descriptions: [
              'On macOS, you have the option of using a .dmg or a .pkg installer. If you download the .dmg, open it and drag the Tetris app into your Applications folder. If you prefer the .pkg, simply double-click the file to run the guided installer. Once installed, the game will be available in Launchpad or your Applications folder.',
            ],
          },
          {
            title: 'Windows',
            descriptions: [
              'To install the game on Windows, download either the .exe or .msi installer. Double-click the file to start the installation process and follow the setup wizard. Once installation is complete, you can launch the game from the Start Menu or your desktop.',
            ],
          },
        ],
      },
    },
  ];
}
