import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

//custome datas
import { CustomService } from '../../../service/custome';

@Component({
  selector: 'app-quote-product-form',
  templateUrl: './quote-product-form.component.html',
  styleUrls: ['./quote-product-form.component.css']
})
export class QuoteProductFormComponent implements OnInit {

  QuoteProductForm: FormGroup;
  products=[];
  taxes=[];
  values;
  
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
          description : new FormControl('', Validators.required),
          price: new FormControl('',  Validators.required),
          quantity: new FormControl('',  Validators.required),
          tax: new FormControl('', Validators.required),
          total: new FormControl('', Validators.required),
          discount: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.QuoteProductForm = new FormGroup({
          product: new FormControl(this.data.value.vin, Validators.required),
          description: new FormControl(this.data.value.year, Validators.required),
          price: new FormControl(this.data.value.color,  Validators.required),
          quantity: new FormControl(this.data.value.vin,  Validators.required),
          tax: new FormControl(this.data.value.brand, Validators.required),
          total: new FormControl(this.data.value.brand, Validators.required),
          discount: new FormControl(this.data.value.vin, Validators.required)
        });
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.QuoteProductForm.value);
    }

}
