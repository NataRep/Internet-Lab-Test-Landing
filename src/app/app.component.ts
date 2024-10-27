import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HowItWorksComponent } from './components/sections/how-it-works/how-it-works.component';
import { ThirdComponent } from './components/sections/third/third.component';
import { FeedbacksComponent } from './components/sections/feedbacks/feedbacks.component';
import { FaqComponent } from './components/sections/faq/faq.component';
import { ArticlesComponent } from './components/sections/articles/articles.component';
import { FormComponent } from './components/sections/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HowItWorksComponent,
    ThirdComponent,
    FeedbacksComponent,
    FaqComponent,
    ArticlesComponent,
    FormComponent,
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
