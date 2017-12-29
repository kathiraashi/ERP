import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteProductFormComponent } from './quote-product-form.component';

describe('QuoteProductFormComponent', () => {
  let component: QuoteProductFormComponent;
  let fixture: ComponentFixture<QuoteProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
