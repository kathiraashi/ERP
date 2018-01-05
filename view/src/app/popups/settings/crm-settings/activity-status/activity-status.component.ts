import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-activity-status',
  templateUrl: './activity-status.component.html',
  styleUrls: ['./activity-status.component.css']
})
export class ActivityStatusComponent implements OnInit {
  ActivityStatusForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<ActivityStatusComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.ActivityStatusForm = new FormGroup({
          activityStatus: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.ActivityStatusForm = new FormGroup({
          activityStatus: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.ActivityStatusForm = new FormGroup({
          activityStatus: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.ActivityStatusForm.value);
    }

}

