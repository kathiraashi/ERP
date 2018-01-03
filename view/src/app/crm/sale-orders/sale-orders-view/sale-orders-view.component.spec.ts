import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrdersViewComponent } from './sale-orders-view.component';

describe('SaleOrdersViewComponent', () => {
  let component: SaleOrdersViewComponent;
  let fixture: ComponentFixture<SaleOrdersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleOrdersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleOrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
