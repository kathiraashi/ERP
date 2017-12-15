import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsSettingsComponent } from './hrms-settings.component';

describe('HrmsSettingsComponent', () => {
  let component: HrmsSettingsComponent;
  let fixture: ComponentFixture<HrmsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrmsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
