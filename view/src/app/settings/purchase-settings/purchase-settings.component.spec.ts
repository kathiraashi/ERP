import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchaseSettingsComponent } from './purchase-settings.component';

describe('PurchaseSettingsComponent', () => {
  let component: PurchaseSettingsComponent;
  let fixture: ComponentFixture<PurchaseSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});