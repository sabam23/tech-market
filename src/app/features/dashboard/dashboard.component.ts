import { Component, OnInit } from '@angular/core';
import { Device } from './interfaces/device.interface';
import { DevicesService } from '../../Shared/services/devices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  searchText = '';
  devicesData!: Device[];
  selected = '';
  constructor(public deviceService: DevicesService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    let sort = this.selected.split('_')[0];
    let order = this.selected.split('_')[1];
    this.deviceService.getAllDevices(sort, order).subscribe(response => {
      this.devicesData = response;
    })
  }

  expand(id: number): void {
    let viewsCount: number;
    let deviceData: {};
    this.deviceService.getDevice(id).subscribe(
      (data) => {
        viewsCount = data.views + 1;
        deviceData = {views: viewsCount};
        this.deviceService.updateDevice(id, deviceData).subscribe();
      }
    )
  }
}
