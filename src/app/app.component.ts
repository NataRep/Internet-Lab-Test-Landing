import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SecondSectionsComponent } from './components/sections/second/second.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SecondSectionsComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
