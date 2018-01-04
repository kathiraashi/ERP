import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//Feture Modules
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

//custome Modules
import { Car} from '../../../domain/car';
import { CarService} from '../../../service/carservice';

import { DataSharedService } from '../../../service/DataSharedService';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  
  cars: Car[];
  selectedCar1: Car;

  //modal 
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private sharedService:DataSharedService, 
    private carService: CarService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.carService.getCarsMedium().then(cars => this.cars = cars);
  }

}