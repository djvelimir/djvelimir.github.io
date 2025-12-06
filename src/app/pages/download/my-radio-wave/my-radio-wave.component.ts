import { Component } from '@angular/core';
import { DownloadProductComponent } from '@app/components/download-product/download-product.component';

@Component({
  selector: 'app-my-radio-wave',
  imports: [DownloadProductComponent],
  templateUrl: './my-radio-wave.component.html',
  styleUrl: './my-radio-wave.component.scss',
})
export class MyRadioWaveComponent {
  downloadList = [
    {
      title: 'My Radio Wave',
      descriptions: [
        'My Radio Wave is a simple, lightweight internet radio application designed for easy, uninterrupted listening. Just launch and start streaming through a clean, minimal interface.',
        'Available for Windows, macOS, and Linux with easy-to-use installers, it offers a smooth listening experience right out of the box.',
        'This project was a fun way to explore audio streaming while focusing on simplicity and user experience.',
      ],
      photo: '/pages/download/my-radio-wave.webp',
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
                  title: '[name]_1.0.0_amd64.deb',
                  url: '',
                },
                {
                  description: 'Ubuntu 24.04',
                  title: '[name]_1.0.0_amd64.deb',
                  url: '',
                },
                {
                  description: 'Fedora 43',
                  title: '[name]-1.0.0-1.x86_64.rpm',
                  url: '',
                },
              ],
            },
            {
              title: 'ARM64',
              links: [
                {
                  description: 'Debian 13',
                  title: '[name]_1.0.0_arm64.deb',
                  url: '',
                },
                {
                  description: 'Ubuntu 24.04',
                  title: '[name]_1.0.0_arm64.deb',
                  url: '',
                },
                {
                  description: 'Fedora 43',
                  title: '[name]-1.0.0-1.aarch64.rpm',
                  url: '',
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
                  title: '[name]-1.0.0.dmg',
                  url: '',
                },
                {
                  description: 'For MDM/IT deployments',
                  title: '[name]-1.0.0.pkg',
                  url: '',
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
                  title: '[name]-1.0.0.exe',
                  url: '',
                },
                {
                  description: 'For Admins (silent installs)',
                  title: '[name]-1.0.0.msi',
                  url: '',
                },
              ],
            },
          ],
        },
      ],
      videos: [
        {
          url: 'https://www.youtube.com/embed/LK_wqkLRet0?rel=0',
        },
        {
          url: 'https://www.youtube.com/embed/0GCJc8VDtbk?rel=0',
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
              'On macOS, you have the option of using a .dmg or a .pkg installer. If you download the .dmg, open it and drag the My Radio Wave app into your Applications folder. If you prefer the .pkg, simply double-click the file to run the guided installer. Once installed, the game will be available in Launchpad or your Applications folder.',
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
