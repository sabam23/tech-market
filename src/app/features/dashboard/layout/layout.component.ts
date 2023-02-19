import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, tap, map } from 'rxjs';
import { CartService } from 'src/app/Shared/services/cart.service';
import { DevicesService } from 'src/app/Shared/services/devices.service';
import { Device } from '../interfaces/device.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  @Input() devicesData$!: BehaviorSubject<Device[]>;
  @Output() searchTextEvent: EventEmitter<string> = new EventEmitter();
  @Output() selectedEvent: EventEmitter<string> = new EventEmitter();

  searchText = '';
  selected = '';
  navigateToCategory: boolean = false;

  constructor(public deviceService: DevicesService, private cartService: CartService, public router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.searchTextEvent.emit(this.searchText);
    this.selectedEvent.emit(this.selected);
  }

  ngOnDestroy(): void {
    this.devicesData$.unsubscribe();
  }

  sort(): void {
    if (this.selected === 'price_asc') {
      this.devicesData$
        .pipe(map((res) => res.sort((a, b) => a.price - b.price)))
        .subscribe();
    } else if (this.selected === 'price_desc') {
      this.devicesData$
        .pipe(map((res) => res.sort((a, b) => b.price - a.price)))
        .subscribe();
    } else if (this.selected === 'views_desc') {
      this.devicesData$
        .pipe(map((res) => res.sort((a, b) => b.views - a.views)))
        .subscribe();
    } else if (this.selected === 'manufacturer') {
      this.devicesData$
        .pipe(
          map((res) =>
            res.sort((a, b) => {
              if (a.manufacturer > b.manufacturer) return 1;
              if (b.manufacturer > a.manufacturer) return -1;
              return 0;
            })
          )
        )
        .subscribe();
    }
  }

  category(category: string, id: number): void {
    if (this.navigateToCategory) {
      this.router.navigate(['/', category]);
    }
  }

  expand(id: number): void {
    if (!this.navigateToCategory) {
      this.router.navigate(['/device', id]);
      this.deviceService
        .getDevice(id)
        .pipe(
          tap((data) => {
            this.deviceService
              .updateDevice(id, { views: data.views + 1 })
              .subscribe();             
          })
        )
        .subscribe();
    } 
  }

  addToCart(id: number): void {
    this.deviceService.getDevice(id).pipe(
      tap(response => this.cartService.cartItems.push(response))
      ).subscribe();
  }
}
