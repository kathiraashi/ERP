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
  selector: 'app-sale-orders-list',
  templateUrl: './sale-orders-list.component.html',
  styleUrls: ['./sale-orders-list.component.css']
})
export class SaleOrdersListComponent implements OnInit {

  cars: Car[];
  selectedCar1: Car;
  ShowQuotes:boolean = true;
  orderConfirmations = [ 'Purchase Order', 'E-mail','Over a Phone'];
  customers = [ 'Company Name 1', 'Company Name 2', 'Company Name 3'];
  quotes = [ 'Quote-001', 'Quote-002', 'Quote-003',  'Quote-004'];

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

  createSale(){
    
  }

  SelectCustomer(data){
    if(data !== ""){
      this.ShowQuotes = false;
    }
  }

  goToSaleCreate(){
    this.router.navigate(['crmCreateSaleOrders']);
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
