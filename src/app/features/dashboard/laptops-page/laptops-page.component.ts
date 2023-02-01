import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { DevicesService } from 'src/app/Shared/services/devices.service';
import { Device } from '../interfaces/device.interface';

@Component({
  selector: 'app-laptops-page',
  templateUrl: './laptops-page.component.html'
})
export class LaptopsPageComponent implements OnInit, OnDestroy {
  selected = '';
  searchText = '';

  devicesData$: BehaviorSubject<Device[]> = new BehaviorSubject<Device[]>(
    [] as Device[]
  );

  constructor(public deviceService: DevicesService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  ngOnDestroy(): void {
      this.devicesData$.unsubscribe();
  }

  getDevices(): void {
    this.deviceService.getAllDevices().pipe(
      map( res => res.filter( r => r.category === "laptop")),
      tap(response => this.devicesData$.next(response))
    ).subscribe()
  }
}
