import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevicesService } from '../../Shared/services/devices.service';
import { Device } from '../dashboard/interfaces/device.interface';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit, OnDestroy {
  size = '128';
  loading: boolean = true;

  constructor(
    private deviceService: DevicesService,
    private route: ActivatedRoute
  ) {}

  public device!: Device | undefined;

  ngOnInit(): void {
    this.getDevice();
  }

  ngOnDestroy(): void {}

  getDevice() {
    this.deviceService
      .getDevice(this.route.snapshot.params['deviceId'])
      .pipe(tap((response) => (this.device = response)))
      .subscribe(r => {
        if (r) {
          this.loading = false;
        }
      });
  }
}
