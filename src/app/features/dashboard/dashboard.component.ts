import { Component, OnInit } from '@angular/core';
import { Device } from './interfaces/device.interface';
import { DevicesService } from './services/devices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  searchText = '';
  devicesData!: Device[];
  selected = '';
  end = 8
  constructor(private deviceService: DevicesService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    let sort = this.selected.split('_')[0];
    let order = this.selected.split('_')[1];
    this.deviceService.getAllDevices(sort, order, this.end).subscribe(response => {
      this.devicesData = response;
    })
  }
}
