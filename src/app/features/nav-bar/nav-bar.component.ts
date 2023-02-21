import { Component } from '@angular/core';
import { CartService } from 'src/app/Shared/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  menuOpen: boolean = false;

  constructor(public cartService: CartService) {}

  openMenu(): void {
    this.menuOpen = true;
  }

  openCart() {
  }
}
