import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../service/exchange-rate.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-observable',
  templateUrl: './rxjs-observable.component.html',
  styleUrl: './rxjs-observable.component.css'
})

export class RxjsObservableComponent implements OnInit {
  // private _subscription: Subscription;
  public currencies: { [key: string]: string };
  public exchangeRates: { [key: string]: number };
  public inputKey: string = '';

  constructor(private _exchangeService: ExchangeRateService) {
    // this._subscription = new Subscription();
    this.currencies = {};
    this.exchangeRates = {};
  }

  ngOnInit(): void {
    // this._subscription.add(
      this._exchangeService.$getCurrencies()
      .pipe()
      .subscribe((response) => {
        this.currencies = response;
      })
    // );
  }

  getExchangeRate(): void {
    if (this.inputKey) {
      // this._subscription.add(
        this._exchangeService.$getExchangeRate(this.inputKey)
        .pipe()
        .subscribe((rate) => {
          // console.log('rate',rate);
          this.exchangeRates = rate.rates;
          // console.log('exchangeRates', this.exchangeRates);
        })
      // );
    }
  }

  // ngOnDestroy(): void {
  //   this._subscription.unsubscribe();
  // }
}