import { Component, OnInit, OnDestroy } from '@angular/core';

// Определяем, как выглядит объект одного слайда
interface Slide {
  title: string;
  description: string;
}

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit, OnDestroy {

  // Массив с данными для наших слайдов
  public slides: Slide[] = [
    {
      title: 'Создаём ювелирное будущее в 3D',
      description: 'Наши украшения — это воплощение ваших идей в цифровом и физическом мире.'
    },
    {
      title: 'Индивидуальный дизайн и моделирование',
      description: 'От эскиза до готовой 3D-модели, полностью соответствующей вашим пожеланиям.'
    },
    {
      title: 'Высококачественная визуализация',
      description: 'Фотореалистичные рендеры, которые покажут ваше будущее изделие во всей красе.'
    }
  ];

  // Индекс активного слайда
  public currentSlideIndex = 0;
  // Переменная для хранения таймера авто-прокрутки
  private slideInterval: any;

  // Этот метод запускается один раз при создании компонента
  ngOnInit(): void {
    this.startAutoSlider();
  }

  // Этот метод запускается при уничтожении компонента (например, при переходе на другую страницу)
  ngOnDestroy(): void {
    // Очищаем таймер, чтобы избежать утечек памяти
    clearInterval(this.slideInterval);
  }

  // Запуск автоматической смены слайдов
  startAutoSlider(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Меняем слайд каждые 5 секунд (5000 мс)
  }

  // Переключиться на конкретный слайд (для точек-индикаторов)
  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    // Перезапускаем таймер при ручном переключении
    clearInterval(this.slideInterval);
    this.startAutoSlider();
  }

  // Показать следующий слайд
  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  // Показать предыдущий слайд
  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}