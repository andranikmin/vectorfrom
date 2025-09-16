import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  isMenuOpen = false;
  isLangDropdownOpen = false;

  flags: { [key: string]: string } = {
    ru: 'assets/images/flags/ru.svg',
    en: 'assets/images/flags/gb.svg'
  };

  constructor(public translate: TranslateService) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  closeMenu(): void {
    setTimeout(() => {
      this.isMenuOpen = false;
    }, 150);
  }

  toggleLangDropdown(): void {
    this.isLangDropdownOpen = !this.isLangDropdownOpen;
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    this.isLangDropdownOpen = false;
    this.closeMenu();
  }
}