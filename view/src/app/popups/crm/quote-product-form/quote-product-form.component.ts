import { Component, Inject, OnInit, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';;

import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

//custome datas
import { CustomService } from '../../../service/custome';

@Component({
  selector: 'app-quote-product-form',
  templateUrl: './quote-product-form.component.html',
  styleUrls: ['./quote-product-form.component.css']
})
export class QuoteProductFormComponent implements OnInit {

  QuoteProductForm: FormGroup;
  discountDisabled: boolean = false;
  checked = true;

//product
  products=[];
  productslist = [];
  product;

//taxes
  taxes=[];
  taxesList=[];
  selectedTaxes = [];
  tax;
  taxKey: string;
  filterTaxType = "";
  selectable: boolean = true;
  removable: boolean = true;

//calculate
  enterdPrice:number;
  enterdQuantity:number;
  enterdDiscount:number;
  multiplePrice:number;
  taxamount:number;
  priceTotal:number;
  taxget:number;
  finalTotal:number;
  


  
    constructor(
      private customeService: CustomService,
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<QuoteProductFormComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  

    ngOnInit() {
      this.customeService.getProductCustom().then(product => this.products = product);
      this.customeService.getTaxCustom().then(tax => this.taxes = tax);

      this.QuoteProductForm = new FormGroup({
          product: new FormControl('', Validators.required),
          description: new FormControl({value: '', disabled: true}, Validators.required),
          price: new FormControl('', Validators.required),
          quantity: new FormControl('1', Validators.required),
          tax: new FormControl('', Validators.required),
          completetotal: new FormControl({value: '', disabled: true}, Validators.required),
          discount: new FormControl('', Validators.required)
      });

      if (this.data.type == 'Edit') {
          if(this.data.value.discount !== ""){ this.discountDisabled = true; };
          this.selectedTaxes = this.data.value.tax;
          this.QuoteProductForm.controls['product'].setValue(this.data.value.product);
          this.QuoteProductForm.controls['description'].setValue(this.data.value.description);
          this.QuoteProductForm.controls['price'].setValue(parseInt(this.data.value.price));
          this.QuoteProductForm.controls['quantity'].setValue(parseInt(this.data.value.quantity));
          this.QuoteProductForm.controls['discount'].setValue(parseInt(this.data.value.discount));
          this.QuoteProductForm.controls['completetotal'].setValue(parseInt(this.data.value.completetotal));
        
      }


  }

  clickEvent(){
    this.discountDisabled = !this.discountDisabled;
    if(this.discountDisabled === false){
      this.QuoteProductForm.controls['discount'].setValue('');
      this.calculate();
    }    
  }

  productsSearchKey(value: string){
      if(value !== ""){
          this.productslist = this.products.filter(function(product){
              return product.product_name.toLowerCase().indexOf(value.toLowerCase()) > -1;
          }.bind(this));
      }else{
          this.productslist = [];
      }
    }
    SelectProduct(id){
      this.product =  this.products.filter(x => x.id == id);
      this.QuoteProductForm.controls['description'].setValue(this.product[0].description);
      this.productslist = [];   
    }


//Search Tax List
    taxSearchKey(){
      this.taxKey = this.QuoteProductForm.value.tax ;  
      if(this.taxKey !== ""){

        if(this.filterTaxType !== ""){
            if(this.filterTaxType === "Percentage Of Price Tax Included" ){
                this.taxesList = this.taxes.filter( tax => tax.tax_computation === this.filterTaxType);
            }else{
                this.taxesList = this.taxes.filter( tax => tax.tax_computation !== "Percentage Of Price Tax Included" );
            }
        }else{
          this.taxesList = this.taxes;
        }

        this.taxesList = this.taxesList.filter((tax)  => {
            return tax.tax_name.toLowerCase().indexOf(this.taxKey.toLowerCase()) > -1;
        });

      }else{
        this.taxesList = [];
      }
    }
//Select Tax
    SelectTax(id){
      this.tax =  this.taxes.filter(x => x.id == id); 
      this.selectedTaxes.push(this.tax[0]);
      this.filterTaxType = this.tax[0].tax_computation;
      let taxesIndex = this.taxes.indexOf(this.tax[0]);
      if (taxesIndex >= 0) { this.taxes.splice(taxesIndex, 1); }
      this.taxesList = [];
      this.calculate();
    }
  
//Remove Selected Tax
    selectedTaxRemove(selectedTax: any): void {
      let index = this.selectedTaxes.indexOf(selectedTax);
      if (index >= 0) {
        this.taxes.push(selectedTax);
        this.selectedTaxes.splice(index, 1);
        this.calculate();
      }
      if(this.selectedTaxes.length <= 0){
        this.filterTaxType = '';
      }
    }

    calculate(){
      this.enterdPrice = this.QuoteProductForm.value.price;
      this.enterdQuantity = this.QuoteProductForm.value.quantity;
      this.enterdDiscount = this.QuoteProductForm.value.discount;
      this.multiplePrice = this.enterdPrice * this.enterdQuantity;
      if(this.enterdDiscount > 0){
        this.multiplePrice = this.multiplePrice - ( (this.multiplePrice * this.enterdDiscount) / 100 ) ;
      } 
      this.finalTotal = this.multiplePrice;
      this.priceTotal = 0;
      this.taxamount = 0;
      
      if(this.enterdPrice > 0 && this.enterdQuantity > 0){

            this.selectedTaxes.forEach((datas) => {
                this.taxget = parseInt(datas.amount);
                if(datas.tax_computation === "Fixed"){
                    this.finalTotal = (this.finalTotal + this.taxget);
                }
                if(datas.tax_computation === "Percentage Of Price"){
                    this.taxamount = (this.multiplePrice * this.taxget) / 100;
                    this.finalTotal = ( this.finalTotal + this.taxamount);
                }
                if(datas.tax_computation === "Percentage Of (Price + Tax)"){
                      this.taxamount = (this.finalTotal * this.taxget) / 100;
                      this.finalTotal = (this.finalTotal + this.taxamount); 
                }
                if(datas.tax_computation === "Percentage Of Price Tax Included"){
                      if(this.taxamount > 0){
                          this.taxamount = (this.taxamount + (this.multiplePrice - (this.multiplePrice / (1 + (this.taxget/100)))));
                      }else{
                          this.taxamount = this.multiplePrice - (this.multiplePrice / (1 + (this.taxget/100)));
                      }
                }
            });

          if(this.filterTaxType === "Percentage Of Price Tax Included"){
            this.QuoteProductForm.controls['completetotal'].setValue(this.multiplePrice);
          }else{
            this.QuoteProductForm.controls['completetotal'].setValue(this.finalTotal);
          }
          
                    
      }
      else{
        this.QuoteProductForm.controls['completetotal'].setValue('');
        }

    }//calculate







    close() {
      this.dialogRef.close('Closed');
    }

    submit() {
      this.QuoteProductForm.controls['tax'].setValue(this.selectedTaxes );
      this.dialogRef.close(this.QuoteProductForm.getRawValue());
    }

}
