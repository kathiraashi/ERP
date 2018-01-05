import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ownership-type',
  templateUrl: './ownership-type.component.html',
  styleUrls: ['./ownership-type.component.css']
})
export class OwnershipTypeComponent implements OnInit {
  OwnershipTypeForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<OwnershipTypeComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.OwnershipTypeForm = new FormGroup({
          ownershipType: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.OwnershipTypeForm = new FormGroup({
          ownershipType: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.OwnershipTypeForm = new FormGroup({
          ownershipType: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.OwnershipTypeForm.value);
    }

}
