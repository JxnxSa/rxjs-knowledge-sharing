import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsMapComponent } from './rxjs-map/rxjs-map.component';
import { RxjsConcatMergeComponent } from './rxjs-concat-merge/rxjs-concat-merge.component';
import { RxjsObservableComponent } from './rxjs-observable/rxjs-observable.component';
import { RxjsIntervalRepeatComponent } from './rxjs-interval-repeat/rxjs-interval-repeat.component';
import { FormsModule } from '@angular/forms';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsMapComponent,
    RxjsConcatMergeComponent,
    RxjsObservableComponent,
    RxjsIntervalRepeatComponent,
    ClockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
