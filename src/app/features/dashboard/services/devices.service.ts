import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../interfaces/device.interface';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/devices';

  getAllDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl);
  }
}
