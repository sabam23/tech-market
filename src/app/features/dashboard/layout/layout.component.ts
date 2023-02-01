import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, tap, map } from 'rxjs';
import { DevicesService } from 'src/app/Shared/services/devices.service';
import { Device } from '../interfaces/device.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @Input() devicesData$!: BehaviorSubject<Device[]>;
  @Output() searchTextEvent: EventEmitter<string> = new EventEmitter();
  @Output() selectedEvent: EventEmitter<string> = new EventEmitter();

  searchText = '';
  selected = '';
  
  constructor(public deviceService: DevicesService) {}

  ngOnInit(): void {
    this.searchTextEvent.emit(this.searchText);
    this.selectedEvent.emit(this.selected);
  }

  ngOnDestroy(): void {
    this.devicesData$.unsubscribe();
  }

  sort(): void {
    if (this.selected === "price_asc") {
      this.devicesData$.pipe(
        map ( res => res.sort((a,b) =>  a.price - b.price))
      ).subscribe()
    } else if (this.selected === "price_desc") {
      this.devicesData$.pipe(
        map ( res => res.sort((a,b) => b.price - a.price))
      ).subscribe()
    } else if (this.selected === "views_desc") {
      this.devicesData$.pipe(
        map ( res => res.sort((a,b) => b.views - a.views))
      ).subscribe()
    } else if (this.selected === "manufacturer") {
      this.devicesData$.pipe(
        map ( res => res.sort((a, b) => {
          if (a.manufacturer > b.manufacturer)  return 1;
          if (b.manufacturer > a.manufacturer) return -1;
          return 0;
        }))
      ).subscribe()
    }
  }

  expand(id: number): void {
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
