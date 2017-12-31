import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,  FormArray} from '@angular/forms';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

//Feture Modules
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { MatDialog, MatDialogRef } from '@angular/material';


//popups
import { QuoteProductFormComponent } from '../../../popups/crm/quote-product-form/quote-product-form.component'

@Component({
  selector: 'app-quotations-create',
  templateUrl: './quotations-create.component.html',
  styleUrls: ['./quotations-create.component.css'],
  providers: [ MessageService ]
})
export class QuotationsCreateComponent implements OnInit {

    msgs: Message[] = [];
    //modal 
    modalRef: BsModalRef;

  QuoteForm: FormGroup;

  // material dialog 
  QuoteProductDialogRef: MatDialogRef<QuoteProductFormComponent>;
  products = [];
  product;
  updateIndex;
  deleterowIndex

  CompanyNames = [ 'Company Name 1', 'Company Name 2', 'Company Name 3'];
  ContactPersons = [ 'Contact Person 1', 'Contact Person 2', 'Contact Person 3'];
  OpportunityNames = [ 'Opportunity Name 1', 'Opportunity Name 2', 'Opportunity Name 3'];
  EmployeeNames = [ 'Employee Name 1', 'Employee Name 2', 'Employee Name 3'];

  constructor( 
                public dialog: MatDialog,
                private formBuilder: FormBuilder,
                private modalService: BsModalService,
                private messageService: MessageService
              ) { this.createForm(); }

                

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
      
  }


  
// Forms Popups
    //Quotation Product Add
        QuoteProductAdd() {
          let QuoteProductDialogRef = this.dialog.open(QuoteProductFormComponent, { width:'75%', data: { Header:'Quotation Product Add Form', type:'Add' } });
          QuoteProductDialogRef.afterClosed().subscribe(result => this.newproductAdd(result));
        }//QuoteProductAdd
        QuoteProductEdit(index) {
          this.product = this.products[index];
          this.updateIndex = index;
          let QuoteProductDialogRef = this.dialog.open(QuoteProductFormComponent, { width:'75%', data: { Header:'Quotation Product Edit Form', type:'Edit', value:this.product } });
          QuoteProductDialogRef.afterClosed().subscribe(result => this.updateproductAdd(result));
        }//QuoteProductEdit

        newproductAdd(result){
          console.log(result);
          if(result !== "Closed"){
            this.products.push( Object.assign({}, result));
            this.products = this.products.slice();
          }
        }
        updateproductAdd(result){
          if(result !== "Closed"){
            this.products[this.updateIndex] = result;
            this.products = this.products.slice();
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
    this.deleterowIndex = rowid;
  }

  confirmDelete(rowid): void {
    this.products = this.products.filter((val,i) => i!=rowid);
    this.modalRef.hide();
    this.msgs = [];
    this.msgs.push({severity:'warn', summary:'Alert Message', detail:'Deleted'});
  }

  declineDelete(): void {
    this.modalRef.hide();
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Alert Message', detail:'Declined'});
  }

}


