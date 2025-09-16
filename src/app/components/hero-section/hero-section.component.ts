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
      title: '_hero_title_1',
      description: '_hero_desc_1'
    },
    {
      title: '_hero_title_2',
      description: '_hero_desc_2'
    },
    {
      title: '_hero_title_3',
      description: '_hero_desc_3'
    }
  ];

  public currentSlideIndex = 0;
  private slideInterval: any;

  ngOnInit(): void {
    this.startAutoSlider();
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  startAutoSlider(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    clearInterval(this.slideInterval);
    this.startAutoSlider();
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}