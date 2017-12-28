import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationsCreateComponent } from './quotations-create.component';

describe('QuotationsCreateComponent', () => {
  let component: QuotationsCreateComponent;
  let fixture: ComponentFixture<QuotationsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
