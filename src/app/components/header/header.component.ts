import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // Добавляем host-binding, чтобы применять класс .scrolled ко всему компоненту
  host: {
    '[class.scrolled]': 'isHeaderScrolled'
  }
})
export class HeaderComponent {
  
  isMenuOpen = false;
  isHeaderScrolled = false; // Новая переменная для отслеживания состояния скролла

  // Этот метод будет вызываться КАЖДЫЙ раз, когда пользователь скроллит страницу
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Проверяем, насколько прокручена страница от верха
    // Если больше 10px, считаем, что пользователь начал скролл
    if (window.pageYOffset > 10) {
      this.isHeaderScrolled = true;
    } else {
      this.isHeaderScrolled = false;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}