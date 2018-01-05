import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniteOfMeasureComponent } from './unite-of-measure.component';

describe('UniteOfMeasureComponent', () => {
  let component: UniteOfMeasureComponent;
  let fixture: ComponentFixture<UniteOfMeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniteOfMeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniteOfMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
