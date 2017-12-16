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
  selector: 'app-accounts-settings',
  templateUrl: './accounts-settings.component.html',
  styleUrls: ['./accounts-settings.component.css'],
  providers: [ MessageService ]
})
export class AccountsSettingsComponent implements OnInit {


  // datatable primng
  cars: Car[];
  cols: any[];
  noRows;
  selectedCar: Car;
  dialogVisible: boolean;
  msgs: Message[] = [];


  //modal 
  modalRef: BsModalRef;

  //form
  TaxAddForm: FormGroup;
  TaxEditForm: FormGroup;
  BankAddForm: FormGroup;
  BankEditForm: FormGroup;
  IncomeTypeAddForm: FormGroup;
  IncomeTypeEditForm: FormGroup;
  PaymentTermsAddForm: FormGroup;
  PaymentTermsEditForm: FormGroup;

  TaxScopes = [ 'Sales', 'Purchase' ];
  TaxComputations = [ 'Fixed', 'Percentage Of Price', 'Percentage Of ( Price + Tax )' , 'Percentage Of Price Tax Included' ];
  vin;

  constructor(  private formBuilder: FormBuilder,
                private modalService: BsModalService,
                private carService: CarService,
                private messageService: MessageService 
              ) {
                 this.createForm();
                 this.noRows = '10';
                } //constructor

  ngOnInit() {
     this.carService.getCarsMedium().then(cars => this.cars = cars);
  }//ngOnInit

  EditCar(car: Car) {
    this.vin = car.vin;
  }//EditCar

  ViewCar(car: Car) {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Car Select', detail:'Vin: ' + car.vin});
  }//ViewCar

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


  handleChange(e) {
    // console.log(e.index);
    // console.log(e.originalEvent.target.innerText);
  }


  createForm(){

    this.TaxAddForm= this.formBuilder.group({ 
      taxName: ['', Validators.compose([ Validators.required ])],
      taxScope: ['', Validators.compose([ Validators.required ])],
      taxComputation: ['', Validators.compose([ Validators.required ])],
      amount: ['', Validators.compose([ Validators.required ])],
      notes: ['', Validators.compose([ Validators.required ])]
    });
    this.TaxEditForm = this.formBuilder.group({ 
      taxName: ['', Validators.compose([ Validators.required ])],
      taxScope: ['', Validators.compose([ Validators.required ])],
      taxComputation: ['', Validators.compose([ Validators.required ])],
      amount: ['', Validators.compose([ Validators.required ])],
      notes: ['', Validators.compose([ Validators.required ])]
    });
    this.BankAddForm= this.formBuilder.group({ 
      bankName: ['', Validators.compose([ Validators.required ])],
      accountName: ['', Validators.compose([ Validators.required ])] ,
      accountNo: ['', Validators.compose([ Validators.required ])],
      ifscCode: ['', Validators.compose([ Validators.required ])] ,
      address: ['', Validators.compose([ Validators.required ])]
    });
    this.BankEditForm = this.formBuilder.group({  
      bankName: ['', Validators.compose([ Validators.required ])],
      accountName: ['', Validators.compose([ Validators.required ])] ,
      accountNo: ['', Validators.compose([ Validators.required ])],
      ifscCode: ['', Validators.compose([ Validators.required ])] ,
      address: ['', Validators.compose([ Validators.required ])]
    });
    this.IncomeTypeAddForm = this.formBuilder.group({ 
      incomeType: ['', Validators.compose([ Validators.required ])]
    });
    this.IncomeTypeEditForm = this.formBuilder.group({ 
      incomeType: ['', Validators.compose([ Validators.required ])]
    });
    this.PaymentTermsAddForm = this.formBuilder.group({ 
      paymentTerm: ['', Validators.compose([ Validators.required ])],
      active: ['', Validators.compose([ Validators.required ])]
    });
    this.PaymentTermsEditForm = this.formBuilder.group({ 
      paymentTerm: ['', Validators.compose([ Validators.required ])],
      active: ['', Validators.compose([ Validators.required ])]
    });


  };//createForm



}
