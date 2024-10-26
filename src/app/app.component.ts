import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SecondComponent } from './components/sections/second/second.component';
import { ThirdComponent } from './components/sections/third/third.component';
import { FourthComponent } from './components/sections/fourth/fourth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SecondComponent, ThirdComponent, FourthComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
