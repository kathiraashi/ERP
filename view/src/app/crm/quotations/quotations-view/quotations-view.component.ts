import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private sharedService:DataSharedService, private carService: CarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }

  EditeQuote(){
    this.sharedService.SetreturnPage('crmViewQuotations');
    this.router.navigate(['crmCreateQuotations']);
  }

}
