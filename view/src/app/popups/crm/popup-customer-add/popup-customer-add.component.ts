import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-popup-customer-add',
  templateUrl: './popup-customer-add.component.html',
  styleUrls: ['./popup-customer-add.component.css']
})
export class PopupCustomerAddComponent implements OnInit {

  PopupCustomerAddForm: FormGroup;
  ContactRoles = [ 'ContactRole 1', 'ContactRole 2', 'ContactRole 3'];
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<PopupCustomerAddComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {
      this.PopupCustomerAddForm = this.formBuilder.group({ 
        name: ['', Validators.compose([  ])],
        mobile: ['', Validators.compose([  ])],
        phone: ['', Validators.compose([  ])],
        email: ['', Validators.compose([  ])],
        jobTitle: ['', Validators.compose([  ])],
        contactRole: ['', Validators.compose([  ])],
        notes: ['', Validators.compose([  ])]
      });

      if (this.data.type == 'Edit') {
        console.log(this.data.value.vin)
        this.PopupCustomerAddForm.setValue({
          name : this.data.value.vin,
          mobile : this.data.value.year,
          phone : this.data.value.color,
          email : this.data.value.vin,
          jobTitle : this.data.value.brand,
          contactRole : 'ContactRole 3',
          notes : this.data.value.vin
        });
      }
    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.PopupCustomerAddForm.value);
    }

}
