import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-income-type',
  templateUrl: './income-type.component.html',
  styleUrls: ['./income-type.component.css']
})
export class IncomeTypeComponent implements OnInit {
  IncomeTypeForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<IncomeTypeComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.IncomeTypeForm = new FormGroup({
          incomeType: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.IncomeTypeForm = new FormGroup({
          incomeType: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.IncomeTypeForm = new FormGroup({
          incomeType: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.IncomeTypeForm.value);
    }

}
