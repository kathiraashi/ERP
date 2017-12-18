// default modules
import { Component, OnInit, TemplateRef  } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

//Feture Modules
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

//custome Modules
import { Car} from '../../domain/car';
import { CarService} from '../../service/carservice';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css'],
  providers: [ MessageService ]
})
export class ProductsAddComponent implements OnInit {

  // datatable primng
  cars=[];
  cols: any[];
  displayDialog: boolean;
  car: Car = new PrimeCar();
  selectedCar: Car;
  newCar: boolean;
  msgs: Message[] = [];
  rowId;


  //modal 
  modalRef: BsModalRef;

  //form
  ProductAddForm: FormGroup;
  AttrAddForm: FormGroup;

  productTypes = [ 'Stockble', 'Consumable', 'Service'];
  unitofMeasures = [ 'Unit of Measures-One', 'Unit of Measures-Two', 'Unit of Measures-Three'];
  salesTaxes = [ 'Sales Tax-One', 'Sales Tax-Two', 'Sales Tax-Three'];
  vin;

  constructor(  private formBuilder: FormBuilder,
                private modalService: BsModalService,
                private carService: CarService,
                private messageService: MessageService 
              ) {
    this.createForm();
    this.addForm();
  } //constructor

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }//ngOnInit


  addAttributeAdd(){
    this.car = new PrimeCar();
    this.newCar = true;
  }

  arttributeEdit(id){
    this.rowId = id;
    this.car = this.cars[id];
    console.log(this.car);
    this.newCar = false;
  }

  onsubmit(){
    console.log('submit');
  }

  formSubmit(){
    let cars = [...this.cars];
    if(!this.newCar){
      this.cars[this.rowId]=this.car;
      console.log(this.car);
    }else{
      console.log(this.car);
     this.cars.push( Object.assign({}, this.car));
     this.cars=this.cars.slice();
    }
    this.cars= cars;
  }

  

  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirmDelete(): void {
    this.modalRef.hide();
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Alert Message', detail:'Deleted'});
  }

  declineDelete(): void {
    this.modalRef.hide();
    this.msgs = [];
    this.msgs.push({severity:'warn', summary:'Alert Message', detail:'Declined'});
  }



  createForm(){

    this.ProductAddForm= this.formBuilder.group({ 
      productName: ['', Validators.compose([ Validators.required ])],
      productSold: ['', Validators.compose([ Validators.required ])],
      productPurchased: ['', Validators.compose([ Validators.required ])],
      productType: ['', Validators.compose([ Validators.required ])],
      purchaseCost: ['', Validators.compose([ Validators.required ])],
      saleCost:  ['', Validators.compose([ Validators.required ])],
      unitofMeasure:  ['', Validators.compose([ Validators.required ])],
      salesTax:  ['', Validators.compose([ Validators.required ])],
      hsnCode:  ['', Validators.compose([ Validators.required ])]
    });
  };
  addForm(){
    this.AttrAddForm= this.formBuilder.group({ 
      vin: ['', Validators.compose([ Validators.required ])],
      year:  ['', Validators.compose([ Validators.required ])],
      color: ['', Validators.compose([ Validators.required ])],
      brand:  ['', Validators.compose([ Validators.required ])]
    });

  };//createForm
  

}

class PrimeCar implements Car {
  constructor(public vin?, public year?, public color?, public brand?) {}
}
