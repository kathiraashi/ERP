import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiplineStatusComponent } from './pipline-status.component';

describe('PiplineStatusComponent', () => {
  let component: PiplineStatusComponent;
  let fixture: ComponentFixture<PiplineStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiplineStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiplineStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
