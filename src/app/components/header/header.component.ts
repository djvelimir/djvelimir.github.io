import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '@app/services/theme/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {
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
