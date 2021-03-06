import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css']
})
export class AccountTypeComponent implements OnInit {
  AccountTypeForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;

  constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<AccountTypeComponent>,
      @Inject(MAT_DIALOG_DATA) private data: any ) { }

    ngOnInit() {

      if (this.data.type === 'Add') {
        this.AccountTypeForm = new FormGroup({
          accountType: new FormControl('', Validators.required)
        });
      }

      if (this.data.type === 'Edit') {
        this.AccountTypeForm = new FormGroup({
          accountType: new FormControl(this.data.value.account_type, Validators.required)
        });
      }

      if (this.data.type === 'View') {
        this.AccountTypeForm = new FormGroup({
          accountType: new FormControl({value: this.data.value.account_type, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }

    close() {
      this.dialogRef.close('Close');
    }

    submit() {
      if (this.data.type === 'Edit' ) {
        this.data.value.account_type = this.AccountTypeForm.value.accountType;
        this.dialogRef.close(this.data.value);
      }
      if (this.data.type === 'Add') {
        this.dialogRef.close(this.AccountTypeForm.value);
      }

    }

}
