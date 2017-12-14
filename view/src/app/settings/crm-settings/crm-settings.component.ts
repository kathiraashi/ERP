// default modules
import { Component, OnInit, TemplateRef  } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

//Feture Modules
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

//custome Modules
import { Car} from '../../domain/car';
import { CarService} from '../../service/carservice';
import { pageLoader, pageIdendity, pageContent } from '../../animations/loader.animation';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';
import { fadeAnimation } from '../../animations/fade.animation';


@Component({
  selector: 'app-crm-settings',
  templateUrl: './crm-settings.component.html',
  styleUrls: ['./crm-settings.component.css'],
  animations:[ pageLoader ],
  providers: [ MessageService ]
})
export class CrmSettingsComponent implements OnInit {

  // loader
  Spinner = false;
  Loader = false;
  pageLoaderAction = 'pageLoaderstart';

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
  AccountTypeAddForm: FormGroup;
  AccountTypeEditForm: FormGroup;
  IndustryTypeAddForm: FormGroup;
  IndustryTypeEditForm: FormGroup;
  OwnershipTypeAddForm: FormGroup;
  OwnershipTypeEditForm: FormGroup;
  ActivityTypeAddForm: FormGroup;
  ActivityTypeEditForm: FormGroup;
  ActivityStatusAddForm: FormGroup;
  ActivityStatusEditForm: FormGroup;
  ActivityPeriorityAddForm: FormGroup;
  ActivityPeriorityEditForm: FormGroup;
  PiplineStatusAddForm: FormGroup;
  PiplineStatusEditForm: FormGroup;
  ContactRoleAddForm: FormGroup;
  ContactRoleEditForm: FormGroup;
  QuotationTermsAddForm: FormGroup;
  QuotationTermsEditForm: FormGroup;
  UniteOfMeasureAddForm: FormGroup;
  UniteOfMeasureEditForm: FormGroup;
  OpportunityStatusAddForm: FormGroup;
  OpportunityStatusEditForm: FormGroup;

  text1: string = '<div>Hello World!</div><div>Add Quotation Terms</div>';
  text2: string = '<div>Hello World!</div><div>Edit Quotation Terms</div>';
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
     // page loader and spinner
     setTimeout(() =>  { this.Spinner = true; this.Loader = true },1000 );
     setTimeout(() => { this.pageLoaderAction = "pageLoaderend"; setTimeout(() => { this.Spinner = false; this.Loader = false;},1000 ); },4000 );
     setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart1"; } }, 1000 );
     setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart2"; } }, 2000 );
     setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart3"; } }, 3000 );
     setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart4"; } }, 4000 );
     setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart5"; } }, 5000 );
    
     //Sambel Data
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

    this.AccountTypeAddForm= this.formBuilder.group({ accountType: ['', Validators.compose([ Validators.required ])] });
    this.AccountTypeEditForm = this.formBuilder.group({ accountType: ['', Validators.compose([ Validators.required ])] });
    this.IndustryTypeAddForm= this.formBuilder.group({ industryType: ['', Validators.compose([ Validators.required ])] });
    this.IndustryTypeEditForm = this.formBuilder.group({  industryType: ['', Validators.compose([ Validators.required ])] });
    this.OwnershipTypeAddForm = this.formBuilder.group({ ownershipType: ['', Validators.compose([ Validators.required ])] });
    this.OwnershipTypeEditForm = this.formBuilder.group({ ownershipType: ['', Validators.compose([ Validators.required ])] });
    this.ActivityTypeAddForm = this.formBuilder.group({ activityType: ['', Validators.compose([ Validators.required ])] });
    this.ActivityTypeEditForm = this.formBuilder.group({ activityType: ['', Validators.compose([ Validators.required ])] });
    this.ActivityStatusAddForm = this.formBuilder.group({ activityStatus: ['', Validators.compose([ Validators.required ])] });
    this.ActivityStatusEditForm = this.formBuilder.group({ activityStatus: ['', Validators.compose([ Validators.required ])] });
    this.ActivityPeriorityAddForm = this.formBuilder.group({ activityPeriority: ['', Validators.compose([ Validators.required ])] });
    this.ActivityPeriorityEditForm = this.formBuilder.group({ activityPeriority: ['', Validators.compose([ Validators.required ])] });
    this.PiplineStatusAddForm = this.formBuilder.group({ piplineStatus: ['', Validators.compose([ Validators.required ])] });
    this.PiplineStatusEditForm = this.formBuilder.group({ piplineStatus: ['', Validators.compose([ Validators.required ])] });
    this.ContactRoleAddForm = this.formBuilder.group({ contactRole: ['', Validators.compose([ Validators.required ])] });
    this.ContactRoleEditForm = this.formBuilder.group({ contactRole: ['', Validators.compose([ Validators.required ])] });
    this.QuotationTermsAddForm = this.formBuilder.group({ quotationTermsName: ['', Validators.compose([ Validators.required ])], quotationTerms: ['', Validators.compose([ Validators.required ])] });
    this.QuotationTermsEditForm = this.formBuilder.group({ quotationTermsName: ['', Validators.compose([ Validators.required ])], quotationTerms: ['', Validators.compose([ Validators.required ])] });
    this.UniteOfMeasureAddForm = this.formBuilder.group({ uniteOfMeasure: ['', Validators.compose([ Validators.required ])] });
    this.UniteOfMeasureEditForm = this.formBuilder.group({ uniteOfMeasure: ['', Validators.compose([ Validators.required ])] });
    this.OpportunityStatusAddForm = this.formBuilder.group({ opportunityStatus: ['', Validators.compose([ Validators.required ])] });
    this.OpportunityStatusEditForm = this.formBuilder.group({ opportunityStatus: ['', Validators.compose([ Validators.required ])] });

  };//createForm

}
