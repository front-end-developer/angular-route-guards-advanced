import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwRestrictedByLoadComponent } from './mw-restricted-by-load.component';

describe('MwRestrictedByLoadComponent', () => {
  let component: MwRestrictedByLoadComponent;
  let fixture: ComponentFixture<MwRestrictedByLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwRestrictedByLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwRestrictedByLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
