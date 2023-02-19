import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  menuOpen: boolean = false;

  constructor() {}

  openMenu(): void {
    this.menuOpen = true;
  }

  openCart() {
  }
}
