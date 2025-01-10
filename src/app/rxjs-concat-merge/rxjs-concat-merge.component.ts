import { Component } from '@angular/core';

import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-rxjs-concat-merge',
  templateUrl: './rxjs-concat-merge.component.html',
  styleUrl: './rxjs-concat-merge.component.css'
})

export class RxjsConcatMergeComponent {
  
  concatData: string[] = [];
  mergeData: string[] = [];

  constructor(private _service: ServiceService) { }

  ngOnInit(): void {
    // เรียก concat
    this._service.getDataSequentially().subscribe((data) => {
      this.concatData.push(data);
    });

    // เรียก merge
    this._service.getDataConcurrently().subscribe((data) => {
      this.mergeData.push(data);
    });
  }
}
