import { Component } from '@angular/core';

interface Item {
  title: string;
  text: string;
  img: string;
}
const ITEMS: Item[] = [
  {
    title: 'Прочитай задание внимательно',
    text: 'Думаю у тебя не займет это больше двух-трех минут',
    img: 'how-it-work-icon-1.svg',
  },
  {
    title: 'Изучи весь макет заранее',
    text: 'Подумай как это будет работать на разных разрешениях и при скролле',
    img: 'how-it-work-icon-2.svg',
  },
  {
    title: 'Сделай хорошо',
    text: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
    img: 'how-it-work-icon-3.svg',
  },
  {
    title: 'Получи предложение',
    text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
    img: 'how-it-work-icon-4.svg',
  },
];

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class SecondComponent {
  itemsList: Item[] = ITEMS;
}
