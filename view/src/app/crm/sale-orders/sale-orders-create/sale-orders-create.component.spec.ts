import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrdersCreateComponent } from './sale-orders-create.component';

describe('SaleOrdersCreateComponent', () => {
  let component: SaleOrdersCreateComponent;
  let fixture: ComponentFixture<SaleOrdersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleOrdersCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleOrdersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
