import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../sections/faq/faq.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @Input() content!: Question;

  isOpen = false;

  toggleOpen() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
