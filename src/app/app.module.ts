import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsMapComponent } from './rxjs-map/rxjs-map.component';
import { RxjsConcatMergeComponent } from './rxjs-concat-merge/rxjs-concat-merge.component';
import { RxjsObservableComponent } from './rxjs-observable/rxjs-observable.component';
import { RxjsIntervalRepeatComponent } from './rxjs-interval-repeat/rxjs-interval-repeat.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsMapComponent,
    RxjsConcatMergeComponent,
    RxjsObservableComponent,
    RxjsIntervalRepeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
