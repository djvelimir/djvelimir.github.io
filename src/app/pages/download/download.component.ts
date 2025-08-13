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
        "I've developed a classic Minesweeper clone in Java that faithfully replicates the original game while introducing several enhancements for a smoother experience. The game includes a guaranteed safe first click, intuitive controls for revealing tiles, flagging mines, and chording, and a configurable game menu with multiple difficulty levels, including a historically accurate beginner mode. Players can enable or disable color-coded numbers, sound effects, background music with selectable themes, and even choose between a classic smiley face or a cat icon for the interface. A ticking timer sound is also available for added challenge. The game supports multiple languages, including English, Estonian, French, Finnish, German, Greek, Italian, Portuguese (Brazil), Portuguese (Portugal), Russian, Serbian, Serbian (Latin), and Spanish. It comes with easy-to-use installers for Windows, macOS, and Linux. Just install and start playing. This was a fun project that allowed me to revisit classic game logic while refining the user experience, and I'm excited to share it.",
      photo: '/pages/download/minesweeper.webp',
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
                  title: 'minesweeper_1.1.0_amd64.deb',
                  url: 'https://drive.google.com/file/d/1ByUxoo_0Gv1BbrtKyytgb1_HZVbANbsX/view?usp=share_link',
                },
                {
                  description: 'For Fedora, RHEL, CentOS:',
                  title: 'minesweeper-1.1.0-1.x86_64.rpm',
                  url: 'https://drive.google.com/file/d/1HrA8gEKBLP3EtQsdRFwDrlI0tYelx-on/view?usp=share_link',
                },
              ],
            },
            {
              title: 'ARM64',
              links: [
                {
                  description: 'For Debian, Ubuntu, Linux Mint:',
                  title: 'minesweeper_1.1.0_arm64.deb',
                  url: 'https://drive.google.com/file/d/1I2jvvZ6mAiJVYymCvEvBEsNWSIbkUD9-/view?usp=share_link',
                },
                {
                  description: 'For Fedora, RHEL, CentOS:',
                  title: 'minesweeper-1.1.0-1.aarch64.rpm',
                  url: 'https://drive.google.com/file/d/1SrCQIi89yvSJ1uIWLBBiUlLPITKA1khf/view?usp=share_link',
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
                  title: 'Minesweeper-1.1.0.dmg',
                  url: 'https://drive.google.com/file/d/1euPhcCe2W5gd-9o3ij9L_X8HvLNk7jMZ/view?usp=share_link',
                },
                {
                  description: 'For MDM/IT deployments:',
                  title: 'Minesweeper-1.1.0.pkg',
                  url: 'https://drive.google.com/file/d/1poW1Yfqs5OU9GMkGYmInMw6-AoJ3IkVA/view?usp=share_link',
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
                  title: 'Minesweeper-1.1.0.exe',
                  url: 'https://drive.google.com/file/d/1A9VxRpzO91Dc4Vp8w2gNwbIrZHNY7zRf/view?usp=share_link',
                },
                {
                  description: 'For Admins (silent installs):',
                  title: 'Minesweeper-1.1.0.msi',
                  url: 'https://drive.google.com/file/d/1uqm5EmgD2tjKCBjHv73hGhwZiUvO6vAJ/view?usp=share_link',
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
