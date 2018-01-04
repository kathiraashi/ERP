import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  
  CompanyInfoForm: FormGroup;
  companyTypes = [ 'Company Type-One', 'Company Type-Two', 'Company Type-Three', 'Company Type-Four', 'Company Type-Five'];
  businessTypes = [ 'Type Of Busioness-One', 'Type Of Busioness-Two', 'Type Of Busioness-Three', 'Type Of Busioness-Four', 'Type Of Busioness-Five'];
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<CompanyInfoComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Edit') {
        this.CompanyInfoForm = new FormGroup({
          companyName: new FormControl(this.data.value.vin, Validators.required),
          pnoneNumber: new FormControl(this.data.value.year, Validators.required),
          email: new FormControl(this.data.value.color,  Validators.required),
          website: new FormControl(this.data.value.vin,  Validators.required),
          companyType: new FormControl('Company Type-Two', Validators.required),
          TypeOfBusiness: new FormControl('Type Of Busioness-Four', Validators.required),
          address: new FormControl(this.data.value.vin, Validators.required)
        });
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.CompanyInfoForm.value);
    }

}

