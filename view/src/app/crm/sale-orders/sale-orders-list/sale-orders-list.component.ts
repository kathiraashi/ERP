import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//custome Modules
import { Car} from '../../../domain/car';
import { CarService} from '../../../service/carservice';

import { DataSharedService } from '../../../service/DataSharedService';

@Component({
  selector: 'app-sale-orders-list',
  templateUrl: './sale-orders-list.component.html',
  styleUrls: ['./sale-orders-list.component.css']
})
export class SaleOrdersListComponent implements OnInit {

  cars: Car[];
  selectedCar1: Car;

  constructor(private sharedService:DataSharedService, private carService: CarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.carService.getCarsMedium().then(cars => this.cars = cars);
  }

  ViewQuote(data){
    this.sharedService.saveData(data);
    this.router.navigate(['crmViewQuotations']);
  }

  EditQuote(data){
    this.sharedService.saveData(data);
    this.router.navigate(['crmCreateQuotations']);
  }
}
