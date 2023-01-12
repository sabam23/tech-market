import {
  state,
  style,
  transition,
  animate,
  trigger,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-mobile-menu',
  animations: [
    trigger('slide', [
      state(
        'open',
        style({
          left: '0',
        })
      ),
      transition('* => *', animate('565ms ease-in-out')),
    ]),
  ],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent {
  @Input() menuOpen!: boolean;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeMenu(): void {
    this.menuOpen = false;
    this.close.emit(false);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > 600) {
      this.menuOpen = false;
      this.close.emit(false);
    }
  }
}
