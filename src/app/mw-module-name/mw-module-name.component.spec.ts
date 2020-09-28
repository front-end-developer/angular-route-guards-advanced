import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwModuleNameComponent } from './mw-module-name.component';

describe('MwModuleNameComponent', () => {
  let component: MwModuleNameComponent;
  let fixture: ComponentFixture<MwModuleNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwModuleNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwModuleNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
