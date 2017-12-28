import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCreateComponent } from './customers-create.component';

describe('CustomersCreatComponent', () => {
  let component: CustomersCreateComponent;
  let fixture: ComponentFixture<CustomersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
