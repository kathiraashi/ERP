import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryUniteOfMeasureComponent } from './inventory-unite-of-measure.component';

describe('InventoryUniteOfMeasureComponent', () => {
  let component: InventoryUniteOfMeasureComponent;
  let fixture: ComponentFixture<InventoryUniteOfMeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryUniteOfMeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryUniteOfMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
