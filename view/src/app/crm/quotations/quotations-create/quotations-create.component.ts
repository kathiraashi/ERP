import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,  FormArray} from '@angular/forms';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

//Feture Modules
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { MatDialog, MatDialogRef } from '@angular/material';

//custome Modules
import { Car } from '../../../domain/car';
import { CarService} from '../../../service/carservice';

//popups
import { QuoteProductFormComponent } from '../../../popups/crm/quote-product-form/quote-product-form.component'

@Component({
  selector: 'app-quotations-create',
  templateUrl: './quotations-create.component.html',
  styleUrls: ['./quotations-create.component.css'],
  providers: [ MessageService ]
})
export class QuotationsCreateComponent implements OnInit {


    // datatable primng
    cars=[];
    cols: any[];
    displayDialog: boolean;
    car: Car = new PrimeCar();
    newCar: boolean;
    msgs: Message[] = [];
    rowId;
    deleterowId;
  
  
    //modal 
    modalRef: BsModalRef;
  
    //form
    ProductAddForm: FormGroup;
    priceListAddForm: FormGroup;
    AttributeForm: FormGroup;
    descriptionForm: FormGroup;


  QuoteForm: FormGroup;

  // material dialog 
  QuoteProductDialogRef: MatDialogRef<QuoteProductFormComponent>;

  CompanyNames = [ 'Company Name 1', 'Company Name 2', 'Company Name 3'];
  ContactPersons = [ 'Contact Person 1', 'Contact Person 2', 'Contact Person 3'];
  OpportunityNames = [ 'Opportunity Name 1', 'Opportunity Name 2', 'Opportunity Name 3'];
  EmployeeNames = [ 'Employee Name 1', 'Employee Name 2', 'Employee Name 3'];

  constructor( 
                public dialog: MatDialog,
                private formBuilder: FormBuilder,
                private modalService: BsModalService,
                private carService: CarService,
                private messageService: MessageService,
                private _fb: FormBuilder ) { this.createForm(); }

                

  createForm(){
    this.QuoteForm = new FormGroup({
        date: new FormControl('', Validators.required),
        companyName: new FormControl('', Validators.required),
        contactPerson: new FormControl('',  Validators.required),
        quoteRefNo: new FormControl('',  Validators.required),
        validTill: new FormControl('', Validators.required),
        opportunityName: new FormControl('', Validators.required),
        employeeName: new FormControl('', Validators.required)
      });

      this.priceListAddForm= this.formBuilder.group({ 
        vin: ['', Validators.compose([ Validators.required ])],
        year:  ['', Validators.compose([ Validators.required ])],
        color: ['', Validators.compose([ Validators.required ])],
        brand:  ['', Validators.compose([ Validators.required ])]
      });
      
  }


  
// Forms Popups
    //Quotation Product Add
        QuoteProductAdd() {
          let QuoteProductDialogRef = this.dialog.open(QuoteProductFormComponent, { width:'75%', data: { Header:'Quotation Product Add Form', type:'Add' } });
          QuoteProductDialogRef.afterClosed().subscribe(result => console.log(result));
        }//QuoteProductAdd
        QuoteProductEdit(id) {
          this.car = this.cars[id];
          let QuoteProductDialogRef = this.dialog.open(QuoteProductFormComponent, { data: { Header:'Quotation Product Edit Form', type:'Edit', value:this.car } });
          QuoteProductDialogRef.afterClosed().subscribe(result => console.log(result));
        }//QuoteProductEdit


   //price List
   addpriceListAdd(){
    this.car = new PrimeCar();
    this.newCar = true;
  }
  priceListEdit(id){
    this.rowId = id;
    this.car = this.cars[id];
    console.log(this.car);
    this.newCar = false;
  }
  formSubmit(){
    let cars = [...this.cars];
    if(!this.newCar){
      this.cars[this.rowId]=this.car;
    }else{
     this.cars= cars;
     this.cars.push( Object.assign({}, this.car));
     this.cars=this.cars.slice();
    }  
  }

  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => this.cars = cars);
  }


  onsubmit(){
    console.log('submit');
  }
  

  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  deleteId(rowid){
    this.deleterowId = rowid;
  }

  confirmDelete(rowid): void {
    this.cars = this.cars.filter((val,i) => i!=rowid);
    this.modalRef.hide();
    this.deleterowId = '';
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Alert Message', detail:'Deleted'});
  }

  declineDelete(): void {
    this.deleterowId = '';
    this.modalRef.hide();
    this.msgs = [];
    this.msgs.push({severity:'warn', summary:'Alert Message', detail:'Declined'});
  }

}




class PrimeCar implements Car {
  constructor(public vin?, public year?, public color?, public brand?) {}
}

