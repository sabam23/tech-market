import { Injectable } from '@angular/core';
import { Device } from 'src/app/features/dashboard/interfaces/device.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems: Device[] = [];

  totalPrice: number = 0;
}
