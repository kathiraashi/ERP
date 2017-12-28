// default modules
import { Component, OnInit, TemplateRef  } from '@angular/core';
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
import { ActivityFormComponent } from '../../../popups/crm/activity-form/activity-form.component'

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
  

  constructor(  public dialog: MatDialog,
                private modalService: BsModalService,
                private carService: CarService,
                private messageService: MessageService 
              ) {  } //constructor

  ngOnInit() {
     this.carService.getCarsSmall().then(cars => this.cars = cars);
  }//ngOnInit

  // material dialog 
  ContactDialogRef: MatDialogRef<ContactFormComponent>;
  ActivityDialogRef: MatDialogRef<ActivityFormComponent>;

// Forms Popups

  //Contact
      ContactAdd() {
        let ContactDialogRef = this.dialog.open(ContactFormComponent, { data: { Header:'Contact Creat Form', type:'Add' } });
        ContactDialogRef.afterClosed().subscribe(result => console.log(result));
      }//ContactAdd
      ContactEdit(car: Car) {
        let ContactDialogRef = this.dialog.open(ContactFormComponent, { data: { Header:'Contact Edit Form', type:'Edit', value:car } });
        ContactDialogRef.afterClosed().subscribe(result => console.log(result));
      }//ContactEdit
      ContactView(car: Car) {
        let ContactDialogRef = this.dialog.open(ContactFormComponent, { data: { Header:'Contact View', type:'View', value:car } });
      }//ContactView

  //Activity
      ActivityAdd() {
        let ActivityDialogRef = this.dialog.open(ActivityFormComponent, { data: { Header:'Activity Creat Form', type:'Add' } });
        ActivityDialogRef.afterClosed().subscribe(result => console.log(result));
      }//ContactAdd
      ActivityEdit(car: Car) {
        let ActivityDialogRef = this.dialog.open(ActivityFormComponent, { data: { Header:'Activity Edit Form', type:'Edit', value:car } });
        ActivityDialogRef.afterClosed().subscribe(result => console.log(result));
      }//ContactEdit
      ActivityView(car: Car) {
        let ActivityDialogRef = this.dialog.open(ActivityFormComponent, { data: { Header:'Activity View', type:'View', value:car } });
      }//ContactView



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
  

}
