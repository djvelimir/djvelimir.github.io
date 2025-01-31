import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  applyCurrentTheme() {
    document.documentElement.classList.toggle('dark', this.isDarkTheme());
  }

  setLightTheme() {
    localStorage['theme'] = 'light';
    this.applyCurrentTheme();
  }

  setDarkTheme() {
    localStorage['theme'] = 'dark';
    this.applyCurrentTheme();
  }

  isDarkTheme() {
    return (
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }
}
