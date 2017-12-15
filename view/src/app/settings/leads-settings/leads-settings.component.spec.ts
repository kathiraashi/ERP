import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsSettingsComponent } from './leads-settings.component';

describe('LeadsSettingsComponent', () => {
  let component: LeadsSettingsComponent;
  let fixture: ComponentFixture<LeadsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
