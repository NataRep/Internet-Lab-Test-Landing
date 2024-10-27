import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected isMenuOpen: boolean;

  constructor() {
    this.isMenuOpen = false;
  }

  protected toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleMenuClick(isMobileMenu: boolean) {
    if (isMobileMenu) {
      this.toggleMenu();
    }
  }
}
