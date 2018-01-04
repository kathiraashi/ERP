import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-info',
  templateUrl: './registration-info.component.html',
  styleUrls: ['./registration-info.component.css']
})
export class RegistrationInfoComponent implements OnInit {

  RegistrationInfoForm: FormGroup;
  registrationTypes = [ 'CST', 'TIN', 'GST', 'PAN', 'Service Tax', 'Others'];
  disabled = false ;
  floatLabel = 'auto';
  values;
  AddFormOthers = false;
  EditFormOthers = false;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<RegistrationInfoComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.RegistrationInfoForm = new FormGroup({
          registrationType: new FormControl('', Validators.required),
          SpecifyRegistrationType: new FormControl('', Validators.required),
          incorporatedDate: new FormControl('',  Validators.required),
          number: new FormControl('',  Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.RegistrationInfoForm = new FormGroup({
          registrationType: new FormControl('GST', Validators.required),
          SpecifyRegistrationType: new FormControl(this.data.value.year, Validators.required),
          incorporatedDate: new FormControl('04/01/2017',  Validators.required),
          number: new FormControl(this.data.value.color,  Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.RegistrationInfoForm = new FormGroup({
          registrationType: new FormControl({value:'GST', disabled: true}, Validators.required),
          SpecifyRegistrationType: new FormControl({value: this.data.value.year, disabled: true}, Validators.required),
          incorporatedDate: new FormControl({value: '04/01/2017', disabled: true}, Validators.required),
          number: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }



    RegTypeStatusAddForm(value){
      if(value === "Others" ){
        this.AddFormOthers = true;
      }else{
        this.AddFormOthers = false;
      }
    };


  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.RegistrationInfoForm.value);
    }

}
