import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Link {
  name: string;
  path: string;
}

const linksArray: Link[] = [
  {
    name: 'Как это работает',
    path: '#how-it-works',
  },
  {
    name: '3-й блок',
    path: '#third',
  },
  {
    name: 'Вопросы и ответы',
    path: '#questions-answers',
  },
  {
    name: 'Форма',
    path: '#form',
  },
];

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  links: Link[];
  @Output() menuItemClicked = new EventEmitter<boolean>();
  @Input() isMobileMenu = false;

  constructor() {
    this.links = linksArray;
  }

  onMenuClick() {
    this.menuItemClicked.emit(this.isMobileMenu);
  }

  trackByLinkName(index: number, link: Link): string {
    return link.name;
  }
}
