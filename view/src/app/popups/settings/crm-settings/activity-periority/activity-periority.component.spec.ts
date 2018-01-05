import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPeriorityComponent } from './activity-periority.component';

describe('ActivityPeriorityComponent', () => {
  let component: ActivityPeriorityComponent;
  let fixture: ComponentFixture<ActivityPeriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityPeriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPeriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
