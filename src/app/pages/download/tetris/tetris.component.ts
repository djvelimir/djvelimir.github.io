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
        'It includes scores and levels, ghost pieces, next piece preview, sound effects, and background music for an engaging experience. Players have full control over the audio experience, you can toggle background music and sound effects on or off at any time to suit your preference.',
        'The game also offers visual customization. You can switch between different backgrounds, reset to the default one, and even choose whether you want the background to be semi-transparent for a cleaner, more focused play area.',
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
                  title: 'tetris_1.2.0_amd64.deb',
                  url: 'https://www.dropbox.com/scl/fi/2kjnsw3ytjw4oa4pwjwzv/tetris_1.2.0_amd64.deb?rlkey=a51nc4kinzimr7xsyo7fm7z4z&st=gg6rvgix&dl=1',
                },
                {
                  description: 'Ubuntu 24.04',
                  title: 'tetris_1.2.0_amd64.deb',
                  url: 'https://www.dropbox.com/scl/fi/pa5ep7yevtru9vb70mo7n/tetris_1.2.0_amd64.deb?rlkey=itp3w82vb9l82d6jkd4ufurpi&st=nk5w9kcm&dl=1',
                },
                {
                  description: 'Fedora 43',
                  title: 'tetris-1.2.0-1.x86_64.rpm',
                  url: 'https://www.dropbox.com/scl/fi/iiayn7vz8j3iobv3t1ofl/tetris-1.2.0-1.x86_64.rpm?rlkey=f4enne1hw56vzv95zd3oanrx2&st=gt1lutw8&dl=1',
                },
              ],
            },
            {
              title: 'ARM64',
              links: [
                {
                  description: 'Debian 13',
                  title: 'tetris_1.2.0_arm64.deb',
                  url: 'https://www.dropbox.com/scl/fi/4gexjlk5xdfp1trz75jz7/tetris_1.2.0_arm64.deb?rlkey=rtmcb1a7gvwetcxvr7bci5530&st=0j50tor5&dl=1',
                },
                {
                  description: 'Ubuntu 24.04',
                  title: 'tetris_1.2.0_arm64.deb',
                  url: 'https://www.dropbox.com/scl/fi/rg0ni5qdnsa2lp1e45j5a/tetris_1.2.0_arm64.deb?rlkey=77sochntsuf7keewgc9u7e7i9&st=93z5e4oe&dl=1',
                },
                {
                  description: 'Fedora 43',
                  title: 'tetris-1.2.0-1.aarch64.rpm',
                  url: 'https://www.dropbox.com/scl/fi/2uygv2ynlqmtli7fu34wf/tetris-1.2.0-1.aarch64.rpm?rlkey=r99oaiqvbekl7lqumrss1tnh6&st=twwm93ny&dl=1',
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
                  title: 'Tetris-1.2.0.dmg',
                  url: 'https://www.dropbox.com/scl/fi/2nswrt0ubdcgbzy0s206g/Tetris-1.2.0.dmg?rlkey=c5vnrq4wynch4svesp4gapbsq&st=f986g7qs&dl=1',
                },
                {
                  description: 'For MDM/IT deployments',
                  title: 'Tetris-1.2.0.pkg',
                  url: 'https://www.dropbox.com/scl/fi/4rszbeo6l5ruzau0c7dm9/Tetris-1.2.0.pkg?rlkey=imjmvfwum8aq364wxwfyoguja&st=1210l1wg&dl=1',
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
                  title: 'Tetris-1.2.0.exe',
                  url: 'https://www.dropbox.com/scl/fi/xm98gyjzcw8g0ibt8hmz8/Tetris-1.2.0.exe?rlkey=4nqfb4x1825qw2cpywls0qbo5&st=xleoxu4w&dl=1',
                },
                {
                  description: 'For Admins (silent installs)',
                  title: 'Tetris-1.2.0.msi',
                  url: 'https://www.dropbox.com/scl/fi/w8bugs5eo1k21kmw8r3d6/Tetris-1.2.0.msi?rlkey=kiuj3fiq9c7mklbtdpm00f300&st=by20k5mh&dl=1',
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
          url: 'https://www.youtube.com/embed/HTyurO6MU3Q?rel=0',
        },
        {
          url: 'https://www.youtube.com/embed/PfS1d31Vw10?rel=0',
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
