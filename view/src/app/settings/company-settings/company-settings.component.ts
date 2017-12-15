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
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.css'],
  providers: [ MessageService ]
})
export class CompanySettingsComponent implements OnInit {


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
  CompanyInfoEditForm: FormGroup;
  ContactInfoAddForm: FormGroup;
  ContactInfoEditForm: FormGroup;
  DepartmentsAddForm: FormGroup;
  DepartmentsEditForm: FormGroup;
  BranchesAddForm: FormGroup;
  BranchesEditForm: FormGroup;
  RegistrationInfoAddForm: FormGroup;
  RegistrationInfoEditForm: FormGroup;

  comTypes = [ 'Company Type-One', 'Company Type-Two', 'Company Type-Three', 'Company Type-Four', 'Company Type-Five'];
  busTypes = [ 'Type Of Busioness-One', 'Type Of Busioness-Two', 'Type Of Busioness-Three', 'Type Of Busioness-Four', 'Type Of Busioness-Five'];
  departments = [ 'Department-One', 'Department-Two', 'Department-Three', 'Department-Four'];
  registrationTypes = [ 'CST', 'TIN', 'GST', 'PAN', 'Service Tax', 'Others'];
  AddFormOthers = false;
  EditFormOthers = false;
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

    this.CompanyInfoEditForm= this.formBuilder.group({ 
      image: ['', Validators.compose([ Validators.required ])],
      companyName: ['', Validators.compose([ Validators.required ])],
      pnoneNumber: ['', Validators.compose([ Validators.required ])],
      eMail: ['', Validators.compose([ Validators.required ])],
      website: ['', Validators.compose([ Validators.required ])],
      companyType: ['', Validators.compose([ Validators.required ])],
      TypeOfBusiness: ['', Validators.compose([ Validators.required ])],
      address: ['', Validators.compose([ Validators.required ])]
    });
    this.ContactInfoAddForm = this.formBuilder.group({ 
      conPersonName: ['', Validators.compose([ Validators.required ])],
      mobileNumber: ['', Validators.compose([ Validators.required ])] ,
      eMail: ['', Validators.compose([ Validators.required ])]
    });
    this.ContactInfoEditForm= this.formBuilder.group({ 
      conPersonName: ['', Validators.compose([ Validators.required ])],
      mobileNumber: ['', Validators.compose([ Validators.required ])] ,
      eMail: ['', Validators.compose([ Validators.required ])]
    });
    this.DepartmentsAddForm = this.formBuilder.group({  
      departmrntName: ['', Validators.compose([ Validators.required ])],
      departmrntHead: ['', Validators.compose([ Validators.required ])]
    });
    this.DepartmentsEditForm = this.formBuilder.group({ 
      departmrntName: ['', Validators.compose([ Validators.required ])],
      departmrntHead: ['', Validators.compose([ Validators.required ])]
    });
    this.BranchesAddForm = this.formBuilder.group({ 
      branchName: ['', Validators.compose([ Validators.required ])],
      branchHead: ['', Validators.compose([ Validators.required ])],
      departments: ['', Validators.compose([ Validators.required ])],
      address: ['', Validators.compose([ Validators.required ])]
    });
    this.BranchesEditForm = this.formBuilder.group({ 
      branchName: ['', Validators.compose([ Validators.required ])],
      branchHead: ['', Validators.compose([ Validators.required ])],
      departments: ['', Validators.compose([ Validators.required ])],
      address: ['', Validators.compose([ Validators.required ])] 
    });
    this.RegistrationInfoAddForm = this.formBuilder.group({ 
      registrationType: ['', Validators.compose([ Validators.required ])],
      incorporatedDate: ['', Validators.compose([ Validators.required ])],
      number: ['', Validators.compose([ Validators.required ])],
      SpecifyRegistrationType:['']
    });
    this.RegistrationInfoEditForm = this.formBuilder.group({ 
      registrationType: ['', Validators.compose([ Validators.required ])],
      incorporatedDate: ['', Validators.compose([ Validators.required ])],
      number: ['', Validators.compose([ Validators.required ])],
      SpecifyRegistrationType:['']
    });

  };//createForm
  

  RegTypeStatusAddForm(){
    if(this.RegistrationInfoAddForm.get('registrationType').value == "Others" ){
      this.AddFormOthers = true;
    }else{
      this.AddFormOthers = false;
    }
  };
  RegTypeStatusEditForm(){
    if(this.RegistrationInfoEditForm .get('registrationType').value == "Others" ){
      this.EditFormOthers = true;
    }else{
      this.EditFormOthers = false;
    }
  };


}
