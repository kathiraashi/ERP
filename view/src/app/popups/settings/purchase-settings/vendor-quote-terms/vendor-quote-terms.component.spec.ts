import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorQuoteTermsComponent } from './vendor-quote-terms.component';

describe('VendorQuoteTermsComponent', () => {
  let component: VendorQuoteTermsComponent;
  let fixture: ComponentFixture<VendorQuoteTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorQuoteTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorQuoteTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
