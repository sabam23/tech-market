import { Component, OnDestroy, OnInit } from '@angular/core';
import { Device } from './interfaces/device.interface';
import { DevicesService } from '../../Shared/services/devices.service';
import { BehaviorSubject, tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  searchText = '';
  devicesData$: BehaviorSubject<Device[]> = new BehaviorSubject<Device[]>(
    [] as Device[]
  );
  selected = '';
  constructor(public deviceService: DevicesService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  ngOnDestroy(): void {
    this.devicesData$.unsubscribe();
  }

  getDevices(): void {
    let sort = this.selected.split('_')[0];
    let order = this.selected.split('_')[1];
    this.deviceService
      .getAllDevices(sort, order)
      .pipe(tap((response) => this.devicesData$.next(response)))
      .subscribe();
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
