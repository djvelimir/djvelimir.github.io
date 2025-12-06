import { Component } from '@angular/core';
import { DownloadProductComponent } from '@app/components/download-product/download-product.component';

@Component({
  selector: 'app-minesweeper',
  imports: [DownloadProductComponent],
  templateUrl: './minesweeper.component.html',
  styleUrl: './minesweeper.component.scss',
})
export class MinesweeperComponent {
  downloadList = [
    {
      title: 'Minesweeper',
      descriptions: [
        "I've developed a classic Minesweeper clone in Java that faithfully replicates the original game while introducing several enhancements for a smoother experience.",
        'The game includes a guaranteed safe first click, intuitive controls for revealing tiles, flagging mines, and chording, and a configurable game menu with multiple difficulty levels, including a historically accurate beginner mode.',
        'Players can enable or disable color-coded numbers, sound effects, background music with selectable themes, and even choose between a classic smiley face or a cat icon for the interface. A ticking timer sound is also available for added challenge.',
        'The game supports multiple languages, including English, Estonian, French, Finnish, German, Greek, Italian, Portuguese (Brazil), Portuguese (Portugal), Russian, Serbian, Serbian (Latin), and Spanish.',
        'It comes with easy-to-use installers for Windows, macOS, and Linux. Just install and start playing.',
        "This was a fun project that allowed me to revisit classic game logic while refining the user experience, and I'm excited to share it.",
      ],
      photo: '/pages/download/minesweeper.webp',
      platforms: [
        {
          os: 'Linux',
          title: 'DEB / RPM / Flatpak',
          architectures: [
            {
              title: 'x64',
              links: [
                {
                  description: 'Debian 13',
                  title: 'minesweeper_1.1.1_amd64.deb',
                  url: 'https://www.dropbox.com/scl/fi/x4qnogak4ga1k6m802c9d/minesweeper_1.1.1_amd64.deb?rlkey=vnnht7risjqzuzdpugfsvr27f&st=lq4r7ft8&dl=1',
                },
                {
                  description: 'Ubuntu 24.04',
                  title: 'minesweeper_1.1.1_amd64.deb',
                  url: 'https://www.dropbox.com/scl/fi/syuh7kkad7axv92isih5u/minesweeper_1.1.1_amd64.deb?rlkey=7lbqz3gg00ss222qqqo53boow&st=oyam58es&dl=1',
                },
                {
                  description: 'Fedora 43',
                  title: 'minesweeper-1.1.1-1.x86_64.rpm',
                  url: 'https://www.dropbox.com/scl/fi/jz7kt0p579okk7asgavyl/minesweeper-1.1.1-1.x86_64.rpm?rlkey=kfusn1f4he6m2apk3cepetav8&st=4nn5qgtr&dl=1',
                },
              ],
            },
            {
              title: 'ARM64',
              links: [
                {
                  description: 'Debian 13',
                  title: 'minesweeper_1.1.1_arm64.deb',
                  url: 'https://www.dropbox.com/scl/fi/q94xdmsz68ievfi9vxx5d/minesweeper_1.1.1_arm64.deb?rlkey=oj5dt1cm72ql0gul61i60bcby&st=bh6mn3lb&dl=1',
                },
                {
                  description: 'Ubuntu 24.04',
                  title: 'minesweeper_1.1.1_arm64.deb',
                  url: 'https://www.dropbox.com/scl/fi/7fv90s71lahduo1c4foe8/minesweeper_1.1.1_arm64.deb?rlkey=5kslibk1lrf9ny3wcrde7vwli&st=pp5vaeoq&dl=1',
                },
                {
                  description: 'Fedora 43',
                  title: 'minesweeper-1.1.1-1.aarch64.rpm',
                  url: 'https://www.dropbox.com/scl/fi/fmiit0rvdw8utikaprgo1/minesweeper-1.1.1-1.aarch64.rpm?rlkey=w1uyhs9fjknspaepnspjjhqwn&st=k309j2k8&dl=1',
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
                  title: 'Minesweeper-1.1.1.dmg',
                  url: 'https://www.dropbox.com/scl/fi/u8fn6ujlsv5yopy5jqwwl/Minesweeper-1.1.1.dmg?rlkey=7i221kuppzi9dkln491y38ism&st=l3wo9vsl&dl=1',
                },
                {
                  description: 'For MDM/IT deployments',
                  title: 'Minesweeper-1.1.1.pkg',
                  url: 'https://www.dropbox.com/scl/fi/0vxm54o2p40032563crvf/Minesweeper-1.1.1.pkg?rlkey=hpp5i6vab4uxyvf1g4yb26yyu&st=lz8y3ijk&dl=1',
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
                  title: 'Minesweeper-1.1.1.exe',
                  url: 'https://www.dropbox.com/scl/fi/gi6p6eryk0j6va8oozsq1/Minesweeper-1.1.1.exe?rlkey=mcx45lv3tanctji535zsuo7xq&st=2vxv8kgd&dl=1',
                },
                {
                  description: 'For Admins (silent installs)',
                  title: 'Minesweeper-1.1.1.msi',
                  url: 'https://www.dropbox.com/scl/fi/co5yqps2blufms6t9x6ln/Minesweeper-1.1.1.msi?rlkey=2e38yfpg5w9dqwredg7jasavp&st=ye0cx1jc&dl=1',
                },
              ],
            },
          ],
        },
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
            descriptions: [
              "For Linux users, choose the package that matches your distribution. You can install it using your system's software installer or a terminal with administrative privileges. After installation, you can launch the game from your applications menu.",
              "If the game's interface appears too small or improperly scaled on high-resolution screens, you can adjust the UI scaling by setting an environment variable. You can add the line export _JAVA_OPTIONS='-Dsun.java2d.uiScale=2.0' to your user's shell configuration file (like ~/.bashrc or ~/.profile) for a per-user effect, or add it to a global configuration file (such as /etc/environment) to apply system-wide. After making this change, you will need to log out and log back in for the new environment variable to take effect.",
            ],
          },
          {
            title: 'macOS',
            descriptions: [
              'On macOS, you have the option of using a .dmg or a .pkg installer. If you download the .dmg, open it and drag the Minesweeper app into your Applications folder. If you prefer the .pkg, simply double-click the file to run the guided installer. Once installed, the game will be available in Launchpad or your Applications folder.',
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
