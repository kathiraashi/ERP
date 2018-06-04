import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmSettingsAccountTypeComponent } from './crm-settings-account-type.component';

describe('CrmSettingsAccountTypeComponent', () => {
  let component: CrmSettingsAccountTypeComponent;
  let fixture: ComponentFixture<CrmSettingsAccountTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmSettingsAccountTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmSettingsAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
