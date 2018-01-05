import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  WarehouseForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<WarehouseComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.WarehouseForm = new FormGroup({
          warehouseName: new FormControl('', Validators.required),
          warehouseCode: new FormControl('', Validators.required),
          warehouseAddress: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.WarehouseForm = new FormGroup({
          warehouseName: new FormControl(this.data.value.brand, Validators.required),
          warehouseCode: new FormControl(this.data.value.vin, Validators.required),
          warehouseAddress: new FormControl(this.data.value.color, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.WarehouseForm = new FormGroup({
          warehouseName: new FormControl({value: this.data.value.brand, disabled: true}, Validators.required),
          warehouseCode: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required),
          warehouseAddress: new FormControl({value: this.data.value.color, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.WarehouseForm.value);
    }

}
