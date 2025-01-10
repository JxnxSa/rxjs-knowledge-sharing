import { Injectable } from '@angular/core';
import { Observable, of, repeat, take, merge, concat, delay, concatMap } from 'rxjs';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor() {}

  getNumbers(): Observable<number> {
    return interval(1000);
  }

  getRepeatedNumbers() {
    return interval(1000).pipe(
      take(5),
      repeat(2)
    );
  }

  getApi1(): Observable<string> {
    const data = ['Data 1 from API 1', 'Data 2 from API 1', 'Data 3 from API 1'];
    return of(...data).pipe(
      concatMap((item) => of(item).pipe(delay(1000)))
    );
  }

  getApi2(): Observable<string> {
    const data = ['Data 1 from API 2', 'Data 2 from API 2', 'Data 3 from API 2'];
    return of(...data).pipe(
      concatMap((item) => of(item).pipe(delay(3000)))
    );
  }

  // Concat (Sequential)
  getDataSequentially(): Observable<string> {
    return concat(this.getApi1(), this.getApi2());
  }

  // Merge (Concurrent)
  getDataConcurrently(): Observable<string> {
    return merge(this.getApi1(), this.getApi2());
  }

  getData(): Observable<string[]> {
    const data = ['apple', 'banana', 'cherry'];
    return of(data).pipe(delay(1000));
  }
}
