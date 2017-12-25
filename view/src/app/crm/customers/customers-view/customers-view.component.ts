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
import { ContactFormComponent } from '../../../popups/crm/contact-form/contact-form.component'

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
  data;


  //modal 
  modalRef: BsModalRef;

  //form
  ActivityAddForm: FormGroup;
  ActivityEditForm: FormGroup;
  vin;

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
                 this.data = {
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                      {
                          label: 'My First dataset',
                          backgroundColor: '#42A5F5',
                          borderColor: '#1E88E5',
                          data: [65, 59, 80, 81, 56, 55, 40]
                      },
                      {
                          label: 'My Second dataset',
                          backgroundColor: '#9CCC65',
                          borderColor: '#7CB342',
                          data: [28, 48, 40, 19, 86, 27, 90]
                      }
                  ]
              }
                } //constructor

  ngOnInit() {
     this.carService.getCarsSmall().then(cars => this.cars = cars);
  }//ngOnInit

  ViewCar(car: Car) {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Car Select', detail:'Vin: ' + car.vin});
  }//ViewCar


  // material dialog 
  popupReturnValue = '';
  exampleDialogRef: MatDialogRef<ContactFormComponent>;

// Forms Popups
    ContactAdd() {
      let exampleDialogRef = this.dialog.open(ContactFormComponent, {
          data: { 
            Header:'Contact Add Form', 
            type:'Add' 
          }
      });
        exampleDialogRef.afterClosed().subscribe(result => console.log(result));
    }//ContactAdd
    ContactEdit(car: Car) {
      let exampleDialogRef = this.dialog.open(ContactFormComponent, {
          data: {
            Header:'Contact Edit Form',
            type:'Edit',
            value:car
          }
      });
        exampleDialogRef.afterClosed().subscribe(result => console.log(result));
    }//ContactEdit



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
  

  ActivityAddFormSubmit(){
    console.log(this.ActivityAddForm.value.leadSource);
    this.ActivityAddForm.reset();
  }
  ActivityEditFormSubmit(){
    console.log(this.ActivityAddForm.value.leadSource);
    this.ActivityAddForm.reset();
  }



}
