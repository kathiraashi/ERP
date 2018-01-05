import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment-terms',
  templateUrl: './payment-terms.component.html',
  styleUrls: ['./payment-terms.component.css']
})
export class PaymentTermsComponent implements OnInit {
  PaymentTermsForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<PaymentTermsComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.PaymentTermsForm = new FormGroup({
          paymentTerm: new FormControl('', Validators.required),
          active: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.PaymentTermsForm = new FormGroup({
          paymentTerm: new FormControl(this.data.value.vin, Validators.required),
          active: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.PaymentTermsForm = new FormGroup({
          paymentTerm: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required),
          active: new FormControl({value: '', disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.PaymentTermsForm.value);
    }

}