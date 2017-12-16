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
  cars: Car[];
  cols: any[];
  displayDialog: boolean;
  car: Car = new PrimeCar();
  selectedCar: Car;
  newCar: boolean;
  msgs: Message[] = [];


  //modal 
  modalRef: BsModalRef;

  //form
  ProductAddForm: FormGroup;

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
  } //constructor

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }//ngOnInit


  addAttributeAdd(){
    this.car = new PrimeCar();
  }

  arttributeEdit(data){
    console.log(data);
  }

  onRgisterSubmit(){
    console.log('submit');
  }


  save() {
    console.log(this.car);
      let cars = [...this.cars];
      cars.push(this.car);
      this.cars = cars;
      this.car = null;
  }

  delete() {
      let index = this.findSelectedCarIndex();
      this.cars = this.cars.filter((val,i) => i!=index);
      this.car = null;
      this.displayDialog = false;
  }    

  onRowSelect(event) {
      this.newCar = false;
      this.car = this.cloneCar(event.data);
      this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
      let car = new PrimeCar();
      for(let prop in c) {
          car[prop] = c[prop];
      }
      return car;
  }

  findSelectedCarIndex(): number {
      return this.cars.indexOf(this.selectedCar);
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
  };//createForm
  

}

class PrimeCar implements Car {
  constructor(public vin?, public year?) {}
}
