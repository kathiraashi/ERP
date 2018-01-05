import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inventory-unite-of-measure',
  templateUrl: './inventory-unite-of-measure.component.html',
  styleUrls: ['./inventory-unite-of-measure.component.css']
})
export class InventoryUniteOfMeasureComponent implements OnInit {
  UniteOfMeasureForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<InventoryUniteOfMeasureComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.UniteOfMeasureForm = new FormGroup({
          uniteOfMeasure: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.UniteOfMeasureForm = new FormGroup({
          uniteOfMeasure: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.UniteOfMeasureForm = new FormGroup({
          uniteOfMeasure: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.UniteOfMeasureForm.value);
    }

}