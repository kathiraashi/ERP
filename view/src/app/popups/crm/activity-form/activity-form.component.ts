import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

  ActivityForm: FormGroup;

  ActivityTypes = [ 'ActivityType 1', 'ActivityType 2', 'ActivityType 3'];
  Statuses = [ 'Status 1', 'Status 2', 'Status 3'];
  Priorities = [ 'Priority 1', 'Priority 2', 'Priority 3'];
  Contacts = [ 'Contact 1', 'Contact 2', 'Contact 3'];

  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<ActivityFormComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {
      if (this.data.type == 'Add') {
        this.ActivityForm = new FormGroup({
          activityDate: new FormControl('', Validators.required),
          contactPerson: new FormControl('', Validators.required),
          subject: new FormControl('',  Validators.required),
          activityType: new FormControl('',  Validators.required),
          status: new FormControl('', Validators.required),
          priority: new FormControl('', Validators.required),
          notes: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.ActivityForm = new FormGroup({
          activityDate: new FormControl(this.data.value.vin, Validators.required),
          contactPerson: new FormControl('Contact 3', Validators.required),
          subject: new FormControl(this.data.value.color,  Validators.required),
          activityType: new FormControl('ActivityType 2',  Validators.required),
          status: new FormControl('Status 3', Validators.required),
          priority: new FormControl('Priority 1', Validators.required),
          notes: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.ActivityForm = new FormGroup({
          activityDate: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required),
          contactPerson: new FormControl({value: 'Contact 3', disabled: true}, Validators.required),
          subject: new FormControl({value: this.data.value.color, disabled: true}, Validators.required),
          activityType: new FormControl({value: 'ActivityType 2', disabled: true}, Validators.required),
          status: new FormControl({value: 'Status 3', disabled: true}, Validators.required),
          priority: new FormControl({value:'Priority 1', disabled: true}, Validators.required),
          notes: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.ActivityForm.value);
    }

}
