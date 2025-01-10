import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-rxjs-map',
  templateUrl: './rxjs-map.component.html',
  styleUrl: './rxjs-map.component.css'
})
export class RxjsMapComponent {
  originalData: string[] = [];
  transformedData: string[] = [];

  constructor(private _service: ServiceService) {}

  ngOnInit(): void {
    this._service.getData().subscribe((data) => {
      this.originalData = data;
    });

    this._service
      .getData()
      .pipe(
        map((data) =>
          data.map((item) => `Fruit: ${item.toUpperCase()}`)
        )
      )
      .subscribe((transformed) => {
        this.transformedData = transformed;
      });
  }
}
