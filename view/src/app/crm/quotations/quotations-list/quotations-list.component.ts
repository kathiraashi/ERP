import { Component, OnInit } from '@angular/core';

//custome Modules
import { Car} from '../../../domain/car';
import { CarService} from '../../../service/carservice';

@Component({
  selector: 'app-quotations-list',
  templateUrl: './quotations-list.component.html',
  styleUrls: ['./quotations-list.component.css']
})
export class QuotationsListComponent implements OnInit {
  
  cars: Car[];

  constructor(private carService: CarService,) { }

  ngOnInit() {
    this.carService.getCarsMedium().then(cars => this.cars = cars);
  }

}
