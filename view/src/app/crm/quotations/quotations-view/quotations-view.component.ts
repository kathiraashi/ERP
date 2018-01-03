import { Component, OnInit } from '@angular/core';

//custome Modules
import { Car} from '../../../domain/car';
import { CarService} from '../../../service/carservice';

import { DataSharedService } from '../../../service/DataSharedService';
@Component({
  selector: 'app-quotations-view',
  templateUrl: './quotations-view.component.html',
  styleUrls: ['./quotations-view.component.css']
})
export class QuotationsViewComponent implements OnInit {

  id;

    // datatable primng
    cars: Car[];
    cols: any[];
    selectedCar: Car;
    dialogVisible: boolean;
    data;

  constructor(private sharedService:DataSharedService, private carService: CarService,) { }

  ngOnInit() {
    this.id = this.sharedService.getData();
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }

}
