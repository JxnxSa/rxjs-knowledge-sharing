import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ExchangeRateResponse {
  rates: { [key: string]: number };
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private _http: HttpClient) { }
  private url = "https://api.frankfurter.dev/v1/";

  $getCurrencies(): Observable<any>{
    return this._http
    .get<any>(`${this.url.toString()}currencies`)
  }

  $getExchangeRate(base: string): Observable<ExchangeRateResponse>{
    return this._http
    .get<ExchangeRateResponse>(`${this.url.toString()}latest?base=${base}`)
  }

}
