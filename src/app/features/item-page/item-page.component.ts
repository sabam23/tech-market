import {Component, OnInit} from '@angular/core';
import {DevicesService} from "../../Shared/services/devices.service";
import {Device} from "../dashboard/interfaces/device.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit{
  constructor(private deviceService: DevicesService, private route: ActivatedRoute) {}

  device!: Device;
  ngOnInit(): void {
    this.getDevice();
  }
  getDevice(): void {
    this.deviceService.getDevice(this.route.snapshot.params['deviceId']).subscribe((response) => {
      this.device = response;
    });
  }
}
