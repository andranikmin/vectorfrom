import { Component } from '@angular/core';

// Определяем, как будет выглядеть объект с данными для одной картинки
interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  // Создаем массив с данными для всей галереи
  public galleryImages: GalleryImage[] = [
    { src: 'assets/images/portfolio_1.jpg', alt: 'Пример работы 1', title: 'Кольцо «Аврора»' },
    { src: 'assets/images/portfolio_2.jpg', alt: 'Пример работы 2', title: 'Кулон «Галактика»' },
    { src: 'assets/images/portfolio_3.jpg', alt: 'Пример работы 3', title: 'Серьги «Волна»' },
    { src: 'assets/images/portfolio_4.jpg', alt: 'Пример работы 4', title: 'Браслет «Спираль»' },
    { src: 'assets/images/portfolio_5.jpg', alt: 'Пример работы 5', title: 'Браслет «Спираль»' },
    { src: 'assets/images/portfolio_6.jpg', alt: 'Пример работы 6', title: 'Браслет «Спираль»' },
    { src: 'assets/images/portfolio_5.jpg', alt: 'Пример работы 6', title: 'Браслет «Спираль»' },
    { src: 'assets/images/portfolio_1.jpg', alt: 'Пример работы 6', title: 'Браслет «Спираль»' },
    { src: 'assets/images/portfolio_2.jpg', alt: 'Пример работы 6', title: 'Браслет «Спираль»' },
    { src: 'assets/images/portfolio_3.jpg', alt: 'Пример работы 6', title: 'Браслет «Спираль»' },
  ];

  // Вместо URL храним ИНДЕКС текущей картинки. null = лайтбокс закрыт.
  currentImageIndex: number | null = null;

  // Метод для открытия лайтбокса по индексу
  openImage(index: number): void {
    this.currentImageIndex = index;
  }

  // Метод для закрытия
  closeImage(): void {
    this.currentImageIndex = null;
  }

  // НОВЫЙ МЕТОД: Показать следующую картинку
  showNextImage(): void {
    if (this.currentImageIndex !== null) {
      // Увеличиваем индекс на 1 и используем остаток от деления, чтобы зациклить галерею
      this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
    }
  }

  // НОВЫЙ МЕТОД: Показать предыдущую картинку
  showPrevImage(): void {
    if (this.currentImageIndex !== null) {
      if (this.currentImageIndex === 0) {
        // Если это первая картинка, переключаемся на последнюю
        this.currentImageIndex = this.galleryImages.length - 1;
      } else {
        // Иначе просто уменьшаем индекс на 1
        this.currentImageIndex--;
      }
    }
  }
}