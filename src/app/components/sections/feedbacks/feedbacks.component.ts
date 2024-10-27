import { Component } from '@angular/core';
import { CarouselComponent } from '../../carousel/carousel.component';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss',
})
export class FeedbacksComponent {}
