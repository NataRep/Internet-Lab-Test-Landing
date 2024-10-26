import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feedback {
  name: string;
  location: string;
  text: string;
  avatar: string;
}

const feedbacks: Feedback[] = [
  {
    name: 'Константинов Михаил Павлович',
    location: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ',
    avatar: 'feedback-avatar.jpg',
  },
  {
    name: 'Иван Иванов',
    location: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    avatar: 'feedback-avatar-1.jpg',
  },
  {
    name: 'Артем Корнилов',
    location: 'Самара',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    avatar: 'feedback-avatar-2.jpg',
  },
  {
    name: 'Ветровоск Эсмеральда',
    location: 'Ланкр',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ',
    avatar: 'feedback-avatar.jpg',
  },
  {
    name: 'Ваймс Семюель',
    location: 'Анк-Морпорк',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ',
    avatar: 'feedback-avatar.jpg',
  },
];

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carouselItemsList') carouselItemsList!: ElementRef;
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;
  @ViewChild('buttonPrev') buttonPrev!: ElementRef;
  @ViewChild('buttonNext') buttonNext!: ElementRef;

  items = feedbacks;
  index = 0;
  itemsCount = 0;
  position = 0;
  wrapperWidth = 0;
  itemWidth = 0;
  countItemsOnSlide = 1;
  indexCurrentIndicator = 0;
  indicators!: boolean[];

  private startX!: number;
  private endX!: number;

  ngAfterViewInit() {
    this.initializeCarousel();
    this.updateButtonStates();
    this.createIndicators();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.initializeCarousel();
    this.updateButtonStates();
    this.createIndicators();
  }

  initializeCarousel() {
    const wrapperEl = this.carouselWrapper.nativeElement;
    const itemsListEl = this.carouselItemsList.nativeElement;
    this.wrapperWidth = wrapperEl.offsetWidth;
    this.itemWidth = itemsListEl.querySelector('.carousel__item').offsetWidth;
    this.itemsCount = itemsListEl.querySelectorAll('.carousel__item').length;
    this.countItemsOnSlide = Math.round(this.wrapperWidth / this.itemWidth);
  }

  createIndicators() {
    const indicatorsCount = Math.ceil(this.itemsCount - (this.countItemsOnSlide - 1));
    this.indicators = new Array(indicatorsCount).fill(false);
  }

  moveSlide(direction: 'next' | 'prev') {
    if (direction === 'next') {
      if (this.index < this.itemsCount - 1) {
        this.index++;
      }
    } else {
      if (this.index > 0) {
        this.index--;
      }
    }

    this.changePosition();
    this.updateButtonStates();
    this.updateIndicators(direction);
  }

  changePosition() {
    this.position = -this.itemWidth * this.index;
    this.carouselItemsList.nativeElement.style.transform = `translateX(${this.position}px)`;
  }

  updateButtonStates(): void {
    this.buttonPrev.nativeElement.disabled = this.index === 0;
    this.buttonNext.nativeElement.disabled = this.index === this.itemsCount - this.countItemsOnSlide;
  }

  updateIndicators(direction: 'next' | 'prev'): void {
    if (direction === 'next') {
      this.indexCurrentIndicator++;
    } else {
      this.indexCurrentIndicator--;
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.endX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.startX = event.clientX;
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.endX = event.clientX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const threshold = 50;
    const diff = this.startX - this.endX;

    if (this.index === 0 && diff < -threshold) {
      return;
    }
    if (this.index === this.itemsCount - this.countItemsOnSlide && diff > threshold) {
      return;
    }

    if (diff > threshold) {
      this.moveSlide('next');
    } else if (diff < -threshold) {
      this.moveSlide('prev');
    }
  }
}
