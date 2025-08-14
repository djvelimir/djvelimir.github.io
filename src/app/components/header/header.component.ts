import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '@services/theme/theme.service';
import { LogoComponent } from '@components/logo/logo.component';
import { BulbComponent } from '@components/bulb/bulb.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, LogoComponent, BulbComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private themeService = inject(ThemeService);

  constructor() {
    const themeService = this.themeService;

    themeService.applyCurrentTheme();
  }

  setLight() {
    this.themeService.setLightTheme();
  }

  setDark() {
    this.themeService.setDarkTheme();
  }

  isDarkTheme() {
    return this.themeService.isDarkTheme();
  }
}
