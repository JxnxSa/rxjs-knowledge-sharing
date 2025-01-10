import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsConcatMergeComponent } from './rxjs-concat-merge.component';

describe('RxjsConcatMergeComponent', () => {
  let component: RxjsConcatMergeComponent;
  let fixture: ComponentFixture<RxjsConcatMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsConcatMergeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsConcatMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
