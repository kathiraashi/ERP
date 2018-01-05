import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-category',
  templateUrl: './employee-category.component.html',
  styleUrls: ['./employee-category.component.css']
})
export class EmployeeCategoryComponent implements OnInit {
  EmployeeCategoryForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<EmployeeCategoryComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.EmployeeCategoryForm = new FormGroup({
          employeeCategory: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.EmployeeCategoryForm = new FormGroup({
          employeeCategory: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.EmployeeCategoryForm = new FormGroup({
          employeeCategory: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.EmployeeCategoryForm.value);
    }

}