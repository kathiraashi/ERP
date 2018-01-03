import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,  FormArray} from '@angular/forms';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';
import { Router, ActivatedRoute } from '@angular/router';

//Feture Modules
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { MatDialog, MatDialogRef } from '@angular/material';

//services
import { DataSharedService } from '../../../service/DataSharedService';

//popups
import { QuoteProductFormComponent } from '../../../popups/crm/quote-product-form/quote-product-form.component'

@Component({
  selector: 'app-quotations-create',
  templateUrl: './quotations-create.component.html',
  styleUrls: ['./quotations-create.component.css'],
  providers: [ MessageService ]
})
export class QuotationsCreateComponent implements OnInit {

  showFinalTab:boolean = false;
    msgs: Message[] = [];
    //modal 
    modalRef: BsModalRef;

  QuoteForm: FormGroup;
  DummyValidateForm: FormGroup;
  QuoteTermsForm: FormGroup;

  // material dialog 
  QuoteProductDialogRef: MatDialogRef<QuoteProductFormComponent>;
  products = [];
  product;
  showDiscount:boolean = false;
  updateIndex;
  deleterowIndex;
  total = 0;
  totalDiscount = 0;
  totalTax =0;
  totalAll = 0;
  subTotal = '0';
  discountTotal = '0';
  taxTotal = '0';
  Total = '0';
  termsValue;

  CompanyNames = [ 'Company Name 1', 'Company Name 2', 'Company Name 3'];
  ContactPersons = [ 'Contact Person 1', 'Contact Person 2', 'Contact Person 3'];
  OpportunityNames = [ 'Opportunity Name 1', 'Opportunity Name 2', 'Opportunity Name 3'];
  EmployeeNames = [ 'Employee Name 1', 'Employee Name 2', 'Employee Name 3'];

  QuoteTermsOptions = [ 'QuoteTermsOption-One', 'QuoteTermsOption-Two', 'QuoteTermsOption-Three', 'QuoteTermsOption-Four'];

  constructor( 
                private sharedService:DataSharedService,
                public dialog: MatDialog,
                private formBuilder: FormBuilder,
                private modalService: BsModalService,
                private messageService: MessageService,
                private route: ActivatedRoute, 
                private router: Router
              ) { this.createForm(); }

                

  createForm(){
    this.QuoteForm = new FormGroup({
        date: new FormControl('', Validators.required),
        companyName: new FormControl(''),
        contactPerson: new FormControl(''),
        quoteRefNo: new FormControl(''),
        validTill: new FormControl(''),
        opportunityName: new FormControl(''),
        employeeName: new FormControl('')
      });
    this.DummyValidateForm = new FormGroup({
        produtsEmpty: new FormControl('', Validators.required)
      });
    this.QuoteTermsForm = new FormGroup({
      termsOption: new FormControl('', Validators.required),
      terms: new FormControl('', Validators.required)
    });
      
  }


  
// Forms Popups
    //Quotation Product Add
        QuoteProductAdd() {
          let QuoteProductDialogRef = this.dialog.open(QuoteProductFormComponent, { width:'75%', disableClose:true,  data: { Header:'Quotation Product Add Form', type:'Add' } });
          QuoteProductDialogRef.afterClosed().subscribe(result => this.newproductAdd(result));
        }//QuoteProductAdd
        QuoteProductEdit(index) {
          this.product = this.products[index];
          this.updateIndex = index;
          let QuoteProductDialogRef = this.dialog.open(QuoteProductFormComponent, { width:'75%', disableClose:true, data: { Header:'Quotation Product Edit Form', type:'Edit', value:this.product } });
          QuoteProductDialogRef.afterClosed().subscribe(result => this.updateproductAdd(result));
        }//QuoteProductEdit

        newproductAdd(result){
          if(result !== "Closed"){
            this.products.push( Object.assign({}, result));
            this.products = this.products.slice();
            this.getTotal();
          }
        }
        updateproductAdd(result){
          if(result !== "Closed"){
            this.products[this.updateIndex] = result;
            this.products = this.products.slice();
            this.getTotal();
          }
       }
       getTotal() {
          this.total = 0; 
          this.totalDiscount = 0;
          this.totalTax = 0;
          this.totalAll = 0;
          let discountShowOption = 0;

          if(this.products.length > 0){
              this.products.forEach((product) => {
                    if (parseInt(product.subtotal) > 0){ 
                            this.total = this.total + Number(product.subtotal); 
                            this.subTotal = (this.total).toFixed(2);
                          }else{  this.subTotal = '0';   }
                    if (parseInt(product.completediscountAmount) > 0){ 
                            this.totalDiscount = this.totalDiscount + Number(product.completediscountAmount); 
                            this.discountTotal = (this.totalDiscount).toFixed(2);
                            discountShowOption = 1;
                          }else{  this.discountTotal = '0';  }
                    if (parseInt(product.completetax) > 0){ 
                            this.totalTax = this.totalTax + Number(product.completetax); 
                            this.taxTotal = (this.totalTax).toFixed(2);
                          }else{  this.taxTotal = '0'; }
                    if (parseInt(product.completetotal) > 0){ 
                            this.totalAll = this.totalAll + Number(product.completetotal); 
                            this.Total = (this.totalAll).toFixed(2);
                          }else{  this.Total = '0'; }
              });

              if(discountShowOption === 1){
                this.showDiscount = true;
              }else{
                this.showDiscount = false;
              }

              this.DummyValidateForm.controls['produtsEmpty'].setValue('Not Empty');
          }
          else{
            this.subTotal = '0';
            this.discountTotal = '0';
            this.taxTotal = '0';
            this.Total = '0';
            this.DummyValidateForm.controls['produtsEmpty'].setValue('');
          }


       }


  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => this.cars = cars);
  }


  onsubmit(){
   let returnPage = this.sharedService.GetreturnPage();
   if(returnPage !== ""){
    this.sharedService.SetreturnPage("");
    this.router.navigate([returnPage]);
   }else{
    this.router.navigate(['crmQuotationsList']);
   }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  deleteId(rowid){
    this.deleterowIndex = rowid;
  }
  confirmDelete(rowid): void {
    this.products = this.products.filter((val,i) => i!=rowid);
    this.getTotal();
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


