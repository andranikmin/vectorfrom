import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  public portfolioItems = [
    { src: 'assets/images/portfolio_1.jpg', titleKey: '_portfolio_item_1' },
    { src: 'assets/images/portfolio_2.jpg', titleKey: '_portfolio_item_2' },
    { src: 'assets/images/portfolio_3.jpg', titleKey: '_portfolio_item_3' },
    { src: 'assets/images/portfolio_4.jpg', titleKey: '_portfolio_item_4' },
    { src: 'assets/images/portfolio_5.jpg', titleKey: '_portfolio_item_5' },
    { src: 'assets/images/portfolio_6.jpg', titleKey: '_portfolio_item_6' }
  ];

  currentImageIndex: number | null = null;

  openImage(index: number): void {
    this.currentImageIndex = index;
  }

  closeImage(): void {
    this.currentImageIndex = null;
  }

  showNextImage(): void {
    if (this.currentImageIndex !== null) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.portfolioItems.length;
    }
  }

  showPrevImage(): void {
    if (this.currentImageIndex !== null) {
      if (this.currentImageIndex === 0) {
        this.currentImageIndex = this.portfolioItems.length - 1;
      } else {
        this.currentImageIndex--;
      }
    }
  }
}