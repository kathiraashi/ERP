import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-expenses-type',
  templateUrl: './expenses-type.component.html',
  styleUrls: ['./expenses-type.component.css']
})
export class ExpensesTypeComponent implements OnInit {
  ExpensesTypeForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<ExpensesTypeComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.ExpensesTypeForm = new FormGroup({
          expensesType: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.ExpensesTypeForm = new FormGroup({
          expensesType: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.ExpensesTypeForm = new FormGroup({
          expensesType: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.ExpensesTypeForm.value);
    }

}
