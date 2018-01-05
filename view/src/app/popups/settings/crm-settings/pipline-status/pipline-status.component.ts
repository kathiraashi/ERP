import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pipline-status',
  templateUrl: './pipline-status.component.html',
  styleUrls: ['./pipline-status.component.css']
})
export class PiplineStatusComponent implements OnInit {
  PiplineStatusForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<PiplineStatusComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.PiplineStatusForm = new FormGroup({
          piplineStatus: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.PiplineStatusForm = new FormGroup({
          piplineStatus: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.PiplineStatusForm = new FormGroup({
          piplineStatus: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.PiplineStatusForm.value);
    }

}
