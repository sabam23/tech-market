import { Component, OnDestroy, OnInit } from '@angular/core';
import { Device } from './interfaces/device.interface';
import { DevicesService } from '../../Shared/services/devices.service';
import { BehaviorSubject, tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(public deviceService: DevicesService) {}

  devicesData$: BehaviorSubject<Device[]> = new BehaviorSubject<Device[]>(
    [] as Device[]
  );

  selected: string = '';
  searchText = '';

  ngOnInit(): void {
    this.getDevices();
  }

  ngOnDestroy(): void {
    this.devicesData$.unsubscribe();
  }
 
  getDevices(): void {
    this.deviceService
      .getAllDevices()
      .pipe(tap((response) => {
        this.devicesData$.next(response);
      }))
      .subscribe();
  }
}
