import { Component, OnInit } from '@angular/core';
import { Device } from './interfaces/device.interface';
import { DevicesService } from './services/devices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  devicesData!: Device[];

  constructor(private deviceService: DevicesService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    this.deviceService.getAllDevices().subscribe(response => {
      this.devicesData = response;
    })
  }
}
