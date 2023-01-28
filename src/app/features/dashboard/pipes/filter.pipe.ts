import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Device } from '../interfaces/device.interface';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(
    items: Observable<Device[]>,
    searchText: string
  ): Observable<Device[]> {
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.pipe(
      map((res) =>
        res.filter(
          (it) =>
            it.manufacturer.toLocaleLowerCase().includes(searchText) ||
            it.model_name.toLocaleLowerCase().includes(searchText) ||
            `${it.manufacturer.toLocaleLowerCase()} ${it.model_name.toLocaleLowerCase()}`.includes(
              searchText
            )
        )
      )
    );
  }
}
