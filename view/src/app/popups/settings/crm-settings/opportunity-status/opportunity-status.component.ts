import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-opportunity-status',
  templateUrl: './opportunity-status.component.html',
  styleUrls: ['./opportunity-status.component.css']
})
export class OpportunityStatusComponent implements OnInit {
  OpportunityStatusForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<OpportunityStatusComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.OpportunityStatusForm = new FormGroup({
          opportunityStatus: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.OpportunityStatusForm = new FormGroup({
          opportunityStatus: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.OpportunityStatusForm = new FormGroup({
          opportunityStatus: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.OpportunityStatusForm.value);
    }

}
