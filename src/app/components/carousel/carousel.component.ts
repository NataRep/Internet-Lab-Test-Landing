import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carouselItemsList') carouselItemsList!: ElementRef;
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;
  @ViewChild('counterCurrent') counterCurrent!: ElementRef;
  @ViewChild('counterAll') counterAll!: ElementRef;

  items = feedbacks;
  index = 0;
  itemsCount = 0;
  position = 0;
  wrapperWidth = 0;
  itemWidth = 0;
  countItemsOnSlide = 1;
  intervalId!: number;

  ngAfterViewInit() {
    this.initializeCarousel();
    //this.startAutoplay();
  }

  initializeCarousel() {
    const wrapperEl = this.carouselWrapper.nativeElement;
    const itemsListEl = this.carouselItemsList.nativeElement;

    // Get dimensions and setup items
    this.wrapperWidth = wrapperEl.offsetWidth;
    this.itemWidth = itemsListEl.querySelector('.carousel__item').offsetWidth;
    this.itemsCount = itemsListEl.querySelectorAll('.carousel__item').length;
    this.countItemsOnSlide = Math.round(this.wrapperWidth / this.itemWidth);
  }

  moveSlide(direction: 'next' | 'prev') {
    console.log(this.index);
    console.log('wrapperWidth', this.wrapperWidth);
    console.log('itemsCount', this.itemsCount);
    console.log('countItemsOnSlide', this.countItemsOnSlide);
    // Update index based on direction
    if (direction === 'next') {
      this.index++;
      //if (this.index >= this.itemsCount / this.countItemsOnSlide) {        this.index = 0;      }
    } else {
      this.index--;
      //if (this.index < 0) {        this.index = Math.floor(this.itemsCount / this.countItemsOnSlide) - 1;      }
    }

    // Calculate new position and update transform
    this.position = -this.itemWidth * this.index;
    this.carouselItemsList.nativeElement.style.transform = `translateX(${this.position}px)`;
  }

  startAutoplay() {
    this.intervalId = setInterval(() => this.moveSlide('next'), 4000);
  }

  stopAutoplay() {
    clearInterval(this.intervalId);
  }
}
