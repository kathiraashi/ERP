import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  BranchesForm: FormGroup;
  departments = [ 'Department-One', 'Department-Two', 'Department-Three', 'Department-Four'];
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<BranchesComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.BranchesForm = new FormGroup({
          branchName: new FormControl('', Validators.required),
          branchHead: new FormControl('', Validators.required),
          departments: new FormControl('',  Validators.required),
          address: new FormControl('',  Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.BranchesForm = new FormGroup({
          branchName: new FormControl(this.data.value.vin, Validators.required),
          branchHead: new FormControl(this.data.value.year, Validators.required),
          departments: new FormControl('',  Validators.required),
          address: new FormControl(this.data.value.color,  Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.BranchesForm = new FormGroup({
          branchName: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required),
          branchHead: new FormControl({value: this.data.value.year, disabled: true}, Validators.required),
          departments: new FormControl({value: '', disabled: true}, Validators.required),
          address: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.BranchesForm.value);
    }

}

