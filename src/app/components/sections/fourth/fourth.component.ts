import { Component } from '@angular/core';
import { CarouselComponent } from '../../carousel/carousel.component';

@Component({
  selector: 'app-fourth',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.scss',
})
export class FourthComponent {}
