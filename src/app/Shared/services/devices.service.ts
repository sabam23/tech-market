import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../../features/dashboard/interfaces/device.interface';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://my-json-server.typicode.com/sabam23/tech-market/devices';
  deviceId!: number;

  getAllDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(
      `${this.baseUrl}`
    );
  }

  getDevice(id: number): Observable<Device> {
    return this.http.get<Device>(`${this.baseUrl}/${id}`);
  }

  updateDevice(id: number, payload: {}): Observable<Device> {
    return this.http.patch<Device>(`${this.baseUrl}/${id}`, payload);
  }
}
