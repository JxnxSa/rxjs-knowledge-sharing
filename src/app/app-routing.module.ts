import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsObservableComponent } from './rxjs-observable/rxjs-observable.component';
import { RxjsMapComponent } from './rxjs-map/rxjs-map.component';
import { RxjsIntervalRepeatComponent } from './rxjs-interval-repeat/rxjs-interval-repeat.component';
import { RxjsConcatMergeComponent } from './rxjs-concat-merge/rxjs-concat-merge.component';
import { ClockComponent } from './clock/clock.component';

const routes: Routes = [
  { path: 'map', component: RxjsMapComponent },
  { path: 'interval-repeat', component: RxjsIntervalRepeatComponent },
  { path: 'concat-merge', component: RxjsConcatMergeComponent },
  { path: 'observable', component: RxjsObservableComponent },
  { path: 'clock', component: ClockComponent },
  { path: '', redirectTo: 'map', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
