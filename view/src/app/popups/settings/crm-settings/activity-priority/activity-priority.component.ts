import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-activity-priority',
  templateUrl: './activity-priority.component.html',
  styleUrls: ['./activity-priority.component.css']
})
export class ActivityPriorityComponent implements OnInit {
  ActivityPriorityForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<ActivityPriorityComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.ActivityPriorityForm = new FormGroup({
          activityPriority: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.ActivityPriorityForm = new FormGroup({
          activityPriority: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.ActivityPriorityForm = new FormGroup({
          activityPriority: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.ActivityPriorityForm.value);
    }

}

