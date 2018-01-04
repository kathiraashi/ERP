import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,  FormArray} from '@angular/forms';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';
import { Router, ActivatedRoute } from '@angular/router';

//Feture Modules
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

//services
import { DataSharedService } from '../../../service/DataSharedService';

@Component({
  selector: 'app-sale-orders-create',
  templateUrl: './sale-orders-create.component.html',
  styleUrls: ['./sale-orders-create.component.css']
})
export class SaleOrdersCreateComponent implements OnInit {

  products=[];

  PO_confirm_Show = false;
  email_confirm_Show = false;
  phone_confirm_Show = false;

  SaleOrderForm: FormGroup;
  DummyValidateForm: FormGroup;


  orderConfirmations = [ 'Purchase Order', 'E-mail','Over a Phone'];

  constructor( 
                private sharedService:DataSharedService,
                private formBuilder: FormBuilder,
                private modalService: BsModalService,
                private route: ActivatedRoute, 
                private router: Router
              ) { this.createForm(); }

                

  createForm(){
    this.SaleOrderForm = new FormGroup({
        salesNumber: new FormControl({value:'SaleOrder-001', disabled:true}),
        customer: new FormControl({value:'Company Name', disabled:true}),
        quoteRefNo: new FormControl({value:'Quote-003', disabled:true}),
        contactPerson: new FormControl({value:'Contact Person Name', disabled:true}),
        validTill: new FormControl({value:'12/01/2018', disabled:true}),
        salesPerson: new FormControl({value:'Employee Name', disabled:true}),
        orderConfirmedBy: new FormControl(''),
        confirmationDate: new FormControl(''),
        poNumber: new FormControl(''),
        poDate: new FormControl(''),
        poDetails: new FormControl('')
      });
    this.DummyValidateForm = new FormGroup({
        produtsEmpty: new FormControl('', Validators.required)
      });
      
  }


  
// Forms Popups


  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => this.cars = cars);
  }

  OrderConfirmChange(value){
    if(value === "Purchase Order"){ 
        this.PO_confirm_Show = true;
        this.email_confirm_Show = false;
        this.phone_confirm_Show = false;
      }
    if(value === "E-mail"){ 
        this.email_confirm_Show = true;
        this.PO_confirm_Show = false;
        this.phone_confirm_Show = false;
    }
    if(value === "Over a Phone"){ 
        this.phone_confirm_Show = true;
        this.PO_confirm_Show = false;
        this.email_confirm_Show = false;
      }
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

}