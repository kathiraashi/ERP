import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-industry-type',
  templateUrl: './industry-type.component.html',
  styleUrls: ['./industry-type.component.css']
})
export class IndustryTypeComponent implements OnInit {
  IndustryTypeForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<IndustryTypeComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.IndustryTypeForm = new FormGroup({
          industryType: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.IndustryTypeForm = new FormGroup({
          industryType: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.IndustryTypeForm = new FormGroup({
          industryType: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.IndustryTypeForm.value);
    }

}