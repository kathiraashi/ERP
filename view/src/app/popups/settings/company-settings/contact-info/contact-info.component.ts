import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
 
  ContactInfoForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<ContactInfoComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.ContactInfoForm = new FormGroup({
          contactPersonName: new FormControl('', Validators.required),
          mobileNumber: new FormControl('', Validators.required),
          email: new FormControl('',  Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.ContactInfoForm = new FormGroup({
          contactPersonName: new FormControl(this.data.value.vin, Validators.required),
          mobileNumber: new FormControl(this.data.value.year, Validators.required),
          email: new FormControl(this.data.value.color,  Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.ContactInfoForm = new FormGroup({
          contactPersonName: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required),
          mobileNumber: new FormControl({value: this.data.value.year, disabled: true}, Validators.required),
          email: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.ContactInfoForm.value);
    }

}
