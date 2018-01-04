import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  DepartmentsForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<DepartmentsComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.DepartmentsForm = new FormGroup({
          departmentName: new FormControl('', Validators.required),
          departmentHead: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.DepartmentsForm = new FormGroup({
          departmentName: new FormControl(this.data.value.vin, Validators.required),
          departmentHead: new FormControl(this.data.value.year, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.DepartmentsForm = new FormGroup({
          departmentName: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required),
          departmentHead: new FormControl({value: this.data.value.year, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.DepartmentsForm.value);
    }

}
