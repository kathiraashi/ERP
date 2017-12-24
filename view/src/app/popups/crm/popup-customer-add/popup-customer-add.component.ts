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
  modelHeader;
  
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
    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.PopupCustomerAddForm.value);
    }

}
