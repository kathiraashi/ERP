import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCreatComponent } from './customers-creat.component';

describe('CustomersCreatComponent', () => {
  let component: CustomersCreatComponent;
  let fixture: ComponentFixture<CustomersCreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersCreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
