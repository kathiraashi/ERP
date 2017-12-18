// default modules
import { Component, OnInit, TemplateRef  } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';
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
  deleteId;


  //modal 
  modalRef: BsModalRef;

  //form
  ProductAddForm: FormGroup;
  AttrAddForm: FormGroup;

  invoiceForm: FormGroup;

  productTypes = [ 'Stockble', 'Consumable', 'Service'];
  unitofMeasures = [ 'Unit of Measures-One', 'Unit of Measures-Two', 'Unit of Measures-Three'];
  salesTaxes = [ 'Sales Tax-One', 'Sales Tax-Two', 'Sales Tax-Three'];
  vin;

  constructor(  private formBuilder: FormBuilder,
                private _formBuild: FormBuilder,
                private modalService: BsModalService,
                private carService: CarService,
                private messageService: MessageService 
              ) {
    this.createForm();
    this.addForm();
  } //constructor

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.invoiceForm = this._formBuild.group({
      Package_Title: [''],
      HotelData: this._formBuild.array([this.addRows()])
    });

  }//ngOnInit



  addRows() {
    let group = this._formBuild.group({
      Htitle: [''],
      HDescription: [''],
      hotelStar: [],
      RoomData: this._formBuild.array([])
    });
    this.addRoom(group.controls.RoomData)
    return group;
  }
  
  addHotel() {
    const control: FormArray = this.invoiceForm.get(`HotelData`) as FormArray;
    control.push(this.addRows());
  }
  
  addRoom(hotel:any) {
    let group = this._formBuild.group({
      Hotel_Room_Type: ['']
    })
    hotel.push(group)
  }
  
  removeRooms(hotel, index) { 
    hotel.controls.RoomData.removeAt(index)
    
  }




  addAttributeAdd(){
    this.AttrAddForm.reset();
    this.AttrAddForm.markAsUntouched();
    this.car = new PrimeCar();
    this.newCar = true;
  }

  arttributeEdit(id){
    this.rowId = id;
    this.car = this.cars[id];
    this.newCar = false;
  }

  onsubmit(){
    console.log('submit');
  }

  formSubmit(){ 
    if(!this.newCar){
      let cars = [...this.cars];
      this.cars[this.rowId] = this.car;
      this.cars= cars;
    }else{
     this.cars.push( Object.assign({}, this.car));
     this.cars = this.cars.slice();
    }
  }
  
  openModal(roindex, template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.deleteId = roindex;
  }

  confirmDelete(index): void {
    console.log(index);
    this.cars = this.cars.filter((val,i) => i!=index);
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
      vin: ['', Validators.compose([ ])],
      year:  ['', Validators.compose([ ])],
      color: ['', Validators.compose([ ])],
      brand:  ['', Validators.compose([ ])]
    });

  };//createForm
  

}

class PrimeCar implements Car {
  constructor(public vin?, public year?, public color?, public brand?) {}
}
