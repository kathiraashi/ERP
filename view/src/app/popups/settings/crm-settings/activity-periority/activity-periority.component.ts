import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-activity-periority',
  templateUrl: './activity-periority.component.html',
  styleUrls: ['./activity-periority.component.css']
})
export class ActivityPeriorityComponent implements OnInit {
  ActivityPeriorityForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<ActivityPeriorityComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.ActivityPeriorityForm = new FormGroup({
          activityPeriority: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.ActivityPeriorityForm = new FormGroup({
          activityPeriority: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.ActivityPeriorityForm = new FormGroup({
          activityPeriority: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.ActivityPeriorityForm.value);
    }

}

