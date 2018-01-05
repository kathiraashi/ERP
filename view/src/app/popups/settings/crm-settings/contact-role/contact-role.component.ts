import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-role',
  templateUrl: './contact-role.component.html',
  styleUrls: ['./contact-role.component.css']
})
export class ContactRoleComponent implements OnInit {
  ContactRoleForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<ContactRoleComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.ContactRoleForm = new FormGroup({
          contactRole: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.ContactRoleForm = new FormGroup({
          contactRole: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.ContactRoleForm = new FormGroup({
          contactRole: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.ContactRoleForm.value);
    }

}