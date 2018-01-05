import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {

  TaxForm: FormGroup;
  TaxScopes = [ 'Sales', 'Purchase' ];
  TaxComputations = [ 'Fixed', 'Percentage Of Price', 'Percentage Of ( Price + Tax )' , 'Percentage Of Price Tax Included' ];
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<TaxComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.TaxForm = new FormGroup({
          taxName: new FormControl('', Validators.required),
          taxScope: new FormControl('', Validators.required),
          taxComputation: new FormControl('',  Validators.required),
          amount: new FormControl('',  Validators.required),
          notes: new FormControl('',  Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.TaxForm = new FormGroup({
          taxName: new FormControl(this.data.value.vin, Validators.required),
          taxScope: new FormControl('Purchase', Validators.required),
          taxComputation: new FormControl('Percentage Of Price',  Validators.required),
          amount: new FormControl(this.data.value.year,  Validators.required),
          notes: new FormControl(this.data.value.color,  Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.TaxForm = new FormGroup({
          taxName: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required),
          taxScope: new FormControl({value: 'Purchase', disabled: true}, Validators.required),
          taxComputation: new FormControl({value: 'Percentage Of Price', disabled: true}, Validators.required),
          amount: new FormControl({value: this.data.value.year, disabled: true}, Validators.required),
          notes: new FormControl({value: this.data.value.color, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.TaxForm.value);
    }

}
