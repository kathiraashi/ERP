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

//product
  products=[];
  productslist = [];
  product;

//taxes
  taxes=[];
  taxesList=[];
  selectedTaxes = [];
  tax;
  selectable: boolean = true;
  removable: boolean = true;

//calculate
  enterdPrice:number;
  enterdQuantity:number;
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


      if (this.data.type == 'Add') {
        this.QuoteProductForm = new FormGroup({
          product: new FormControl('', Validators.required),
          description : new FormControl({value:'', disabled: true}, Validators.required),
          price: new FormControl('',  Validators.required),
          quantity: new FormControl('',  Validators.required),
          tax: new FormControl('', Validators.required),
          total: new FormControl({value:'', disabled: true},Validators.required),
          discount: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.QuoteProductForm = new FormGroup({
          product: new FormControl(this.data.value.vin, Validators.required),
          description: new FormControl({value: this.data.value.year, disabled: true}, Validators.required),
          price: new FormControl(this.data.value.color,  Validators.required),
          quantity: new FormControl(this.data.value.vin,  Validators.required),
          tax: new FormControl(this.data.value.brand, Validators.required),
          total: new FormControl(this.data.value.brand, Validators.required),
          discount: new FormControl({value: this.data.value.year, disabled: true}, Validators.required)
        });
      }
  }



  productsSearchKey(value: string){
      if(value !== ""){
          this.productslist = this.products.filter(function(el){
              return el.product_name.toLowerCase().indexOf(value.toLowerCase()) > -1;
          }.bind(this));
      }else{
          this.productslist = [];
      }
    }
    SelectProduct(id){
      this.product =  this.products.filter(x => x.id == id);
      this.QuoteProductForm.patchValue({description:this.product[0].description });
      this.productslist = [];   
    }


//Search Tax List
    taxSearchKey(taxKey: string){
      if(taxKey !== ""){
        this.taxesList = this.taxes.filter(function(el){
            return el.tax_name.toLowerCase().indexOf(taxKey.toLowerCase()) > -1;
        }.bind(this));
      }else{
        this.taxesList = [];
      }
    }
//Select Tax
    SelectTax(id){
      this.tax =  this.taxes.filter(x => x.id == id); 
      this.selectedTaxes.push(this.tax[0]);
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
    }

    calculate(){
      this.enterdPrice = this.QuoteProductForm.value.price;
      this.enterdQuantity = this.QuoteProductForm.value.quantity;
      this.multiplePrice = this.enterdPrice * this.enterdQuantity;
      this.finalTotal = this.multiplePrice;
      this.priceTotal = 0;
      

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
            });
          
          this.QuoteProductForm.patchValue({total:this.finalTotal });           
      }
      else{
        this.QuoteProductForm.patchValue({total: '0' });
        }

        
        
    }







    close() {
      this.dialogRef.close();
    }

    submit() {
      console.log(this.QuoteProductForm.value);
      this.dialogRef.close();
    }

}
