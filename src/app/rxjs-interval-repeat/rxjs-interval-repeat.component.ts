import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map, repeat, tap } from 'rxjs/operators';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-rxjs-interval-repeat',
  templateUrl: './rxjs-interval-repeat.component.html',
  styleUrl: './rxjs-interval-repeat.component.css'
})
export class RxjsIntervalRepeatComponent {
  public numbers: number[] = [];

  constructor(private _service: ServiceService) {}

  ngOnInit(): void {
    this._service.getRepeatedNumbers().subscribe((value: number) => {
      this.numbers.push(value);
    });
  }
}
