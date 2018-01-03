import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrdersListComponent } from './sale-orders-list.component';

describe('SaleOrdersListComponent', () => {
  let component: SaleOrdersListComponent;
  let fixture: ComponentFixture<SaleOrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleOrdersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
