import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBeforeLeaveComponentComponent } from './check-before-leave-component.component';

describe('CheckBeforeLeaveComponentComponent', () => {
  let component: CheckBeforeLeaveComponentComponent;
  let fixture: ComponentFixture<CheckBeforeLeaveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBeforeLeaveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBeforeLeaveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
