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
                  title: 'tetris_1.1.1_amd64.deb',
                  url: 'https://www.dropbox.com/scl/fi/c9uklj7nofkj8s8qdf6ts/tetris_1.1.1_amd64.deb?rlkey=6iopegy36nhnnhhxeb2gexsle&st=jwnp1m7o&dl=1',
                },
                {
                  description: 'Ubuntu 24.04',
                  title: 'tetris_1.1.1_amd64.deb',
                  url: 'https://www.dropbox.com/scl/fi/qcicm46avnzdzehg0br25/tetris_1.1.1_amd64.deb?rlkey=fp0rlpja972yj19j8782wu1ep&st=tk9l576f&dl=1',
                },
                {
                  description: 'Fedora 43',
                  title: 'tetris-1.1.1-1.x86_64.rpm',
                  url: 'https://www.dropbox.com/scl/fi/t3zi2l2szp5sg0600neht/tetris-1.1.1-1.x86_64.rpm?rlkey=dyju0se80znhpzkf3hi6olytn&st=tdhr8s03&dl=1',
                },
              ],
            },
            {
              title: 'ARM64',
              links: [
                {
                  description: 'Debian 13',
                  title: 'tetris_1.1.1_arm64.deb',
                  url: 'https://www.dropbox.com/scl/fi/si44v8mt3tjmi9gtnhbme/tetris_1.1.1_arm64.deb?rlkey=l2o59qxoj6chzysbsqfcgg2qa&st=hd5a3rz3&dl=1',
                },
                {
                  description: 'Ubuntu 24.04',
                  title: 'tetris_1.1.1_arm64.deb',
                  url: 'https://www.dropbox.com/scl/fi/zlypc2bzi52rpdct0es3f/tetris_1.1.1_arm64.deb?rlkey=jfyygabovhb1hzorua6qq47gs&st=4sja9siy&dl=1',
                },
                {
                  description: 'Fedora 43',
                  title: 'tetris-1.1.1-1.aarch64.rpm',
                  url: 'https://www.dropbox.com/scl/fi/5wj3d97js03a439jv71hq/tetris-1.1.1-1.aarch64.rpm?rlkey=0owhy7w9pg2zuukdr9ppg0iw3&st=kzwfoebk&dl=1',
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
                  title: 'Tetris-1.1.1.dmg',
                  url: 'https://www.dropbox.com/scl/fi/zwtv6g7c8f7px8gdlb236/Tetris-1.1.1.dmg?rlkey=pjxekz21mipr4f0l76l3yqshq&st=xbdvxz37&dl=1',
                },
                {
                  description: 'For MDM/IT deployments',
                  title: 'Tetris-1.1.1.pkg',
                  url: 'https://www.dropbox.com/scl/fi/ub3whsk3rj8kpro5uuqyv/Tetris-1.1.1.pkg?rlkey=te8l2iomk1fcbb6x5xypus6aq&st=vy71032x&dl=1',
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
                  title: 'Tetris-1.1.1.exe',
                  url: 'https://www.dropbox.com/scl/fi/t1jzvkdw3g56ydeo1f4sv/Tetris-1.1.1.exe?rlkey=l9e8u60zi7d9rnm864sfhu4z4&st=2p30zeo7&dl=1',
                },
                {
                  description: 'For Admins (silent installs)',
                  title: 'Tetris-1.1.1.msi',
                  url: 'https://www.dropbox.com/scl/fi/looeee6980cgtledjkkco/Tetris-1.1.1.msi?rlkey=wdfbrr01edq3ei1rfxltbqa2b&st=hcco495u&dl=1',
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
