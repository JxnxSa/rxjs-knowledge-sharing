import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsIntervalRepeatComponent } from './rxjs-interval-repeat.component';

describe('RxjsIntervalRepeatComponent', () => {
  let component: RxjsIntervalRepeatComponent;
  let fixture: ComponentFixture<RxjsIntervalRepeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsIntervalRepeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsIntervalRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
