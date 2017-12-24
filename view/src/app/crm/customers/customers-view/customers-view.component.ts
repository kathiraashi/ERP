// default modules
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';
import { filter } from 'rxjs/operators';

//Feture Modules
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { MatDialog, MatDialogRef } from '@angular/material';

//custome Modules
import { Car} from '../../../domain/car';
import { CarService} from '../../../service/carservice';


//popups
import { PopupCustomerAddComponent } from '../../../popups/crm/popup-customer-add/popup-customer-add.component'

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css'],
  providers: [ MessageService ]
})
export class CustomersViewComponent implements OnInit {


  // datatable primng
  cars: Car[];
  cols: any[];
  selectedCar: Car;
  dialogVisible: boolean;
  msgs: Message[] = [];


  //modal 
  modalRef: BsModalRef;

  //form
  ContactsAddForm: FormGroup;
  ContactsEditForm: FormGroup;
  ActivityAddForm: FormGroup;
  ActivityEditForm: FormGroup;
  vin;

  ContactRoles = [ 'ContactRole 1', 'ContactRole 2', 'ContactRole 3'];
  ContactPersons = [ 'ContactPerson 1', 'ContactPerson 2', 'ContactPerson 3'];
  ActivityTypes = [ 'ActivityType 1', 'ActivityType 2', 'ActivityType 3'];
  Statuses = [ 'Status 1', 'Status 2', 'Status 3'];
  Priorities = [ 'Priority 1', 'Priority 2', 'Priority 3'];

  constructor(  public dialog: MatDialog,
                private formBuilder: FormBuilder,
                private modalService: BsModalService,
                private carService: CarService,
                private messageService: MessageService 
              ) {
                 this.createForm();
                } //constructor

  ngOnInit() {
     this.carService.getCarsSmall().then(cars => this.cars = cars);
  }//ngOnInit

  EditCar(car: Car) {
    this.vin = car.vin;
  }//EditCar

  ViewCar(car: Car) {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Car Select', detail:'Vin: ' + car.vin});
  }//ViewCar


  // material dialog 
  popupReturnValue = '';
  exampleDialogRef: MatDialogRef<PopupCustomerAddComponent>;

  // material dialog
  openDialog() {
   let exampleDialogRef = this.dialog.open(PopupCustomerAddComponent, {
      data: {
        type: 'Contact Add Form'
      }
   });
    exampleDialogRef.afterClosed().subscribe(result => console.log(result));
        
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


  handleChange(e) {
    // console.log(e.index);
    // console.log(e.originalEvent.target.innerText);
  }


  createForm(){
    this.ContactsAddForm = this.formBuilder.group({ 
      name: ['', Validators.compose([  ])],
      mobile: ['', Validators.compose([  ])],
      phone: ['', Validators.compose([  ])],
      email: ['', Validators.compose([  ])],
      jobTitle: ['', Validators.compose([  ])],
      contactRole: ['', Validators.compose([  ])],
      notes: ['', Validators.compose([  ])]
    });
    this.ContactsEditForm = this.formBuilder.group({ 
      name: ['', Validators.compose([  ])],
      mobile: ['', Validators.compose([  ])],
      phone: ['', Validators.compose([  ])],
      email: ['', Validators.compose([  ])],
      jobTitle: ['', Validators.compose([  ])],
      contactRole: ['', Validators.compose([  ])],
      notes: ['', Validators.compose([  ])] 
    });
    this.ActivityAddForm = this.formBuilder.group({ 
      activityDate: ['', Validators.compose([  ])],
      contactPerson: ['', Validators.compose([  ])],
      subject: ['', Validators.compose([  ])],
      activityType: ['', Validators.compose([  ])],
      status: ['', Validators.compose([  ])],
      priority: ['', Validators.compose([  ])],
      notes: ['', Validators.compose([  ])]
    });
    this.ActivityEditForm = this.formBuilder.group({ 
      activityDate: ['', Validators.compose([  ])],
      contactPerson: ['', Validators.compose([  ])],
      subject: ['', Validators.compose([  ])],
      activityType: ['', Validators.compose([  ])],
      status: ['', Validators.compose([  ])],
      priority: ['', Validators.compose([  ])],
      notes: ['', Validators.compose([  ])]
    });
  };//createForm
  

  ContactsAddFormSubmit(){
    console.log(this.ContactsAddForm.value.leadSource);
    this.ContactsAddForm.reset();
  }
  ContactsEditFormSubmit(){
    console.log(this.ContactsEditForm.value.leadSource);
    this.ContactsEditForm.reset();
  }

  ActivityAddFormSubmit(){
    console.log(this.ContactsAddForm.value.leadSource);
    this.ContactsAddForm.reset();
  }
  ActivityEditFormSubmit(){
    console.log(this.ContactsEditForm.value.leadSource);
    this.ContactsEditForm.reset();
  }



}
