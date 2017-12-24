import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCustomerAddComponent } from './popup-customer-add.component';

describe('PopupCustomerAddComponent', () => {
  let component: PopupCustomerAddComponent;
  let fixture: ComponentFixture<PopupCustomerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCustomerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCustomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
