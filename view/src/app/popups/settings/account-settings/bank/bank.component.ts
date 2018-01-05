import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  BankForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<BankComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.BankForm = new FormGroup({
          bankName: new FormControl('', Validators.required),
          accountName: new FormControl('', Validators.required),
          accountNo: new FormControl('',  Validators.required),
          ifscCode: new FormControl('', Validators.required),
          address: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.BankForm = new FormGroup({
          bankName: new FormControl(this.data.value.vin, Validators.required),
          accountName: new FormControl(this.data.value.year, Validators.required),
          accountNo: new FormControl(this.data.value.color,  Validators.required),
          ifscCode: new FormControl(this.data.value.vin, Validators.required),
          address: new FormControl(this.data.value.brand, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.BankForm = new FormGroup({
          bankName: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required),
          accountName: new FormControl({value: this.data.value.year, disabled: true}, Validators.required),
          accountNo: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required),
          ifscCode: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required),
          address: new FormControl({value: this.data.value.brand, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.BankForm.value);
    }

}