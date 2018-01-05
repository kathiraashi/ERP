import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quotation-terms',
  templateUrl: './quotation-terms.component.html',
  styleUrls: ['./quotation-terms.component.css']
})
export class QuotationTermsComponent implements OnInit {
  QuotationTermsForm: FormGroup;
  
  termsView;
  text1: string = '<div>Hello World!</div><div>Edit Quotation Terms</div>';
  text2: string = '<div>Hello World!</div><div>View Quotation Terms</div>';

  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<QuotationTermsComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.QuotationTermsForm = new FormGroup({
          quotationTermsName: new FormControl('', Validators.required),
          quotationTerms:  new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.QuotationTermsForm = new FormGroup({
          quotationTermsName: new FormControl(this.data.value.vin, Validators.required),
          quotationTerms: new FormControl('', Validators.required)
        });
        this.termsView = this.text1;
      }

      if (this.data.type == 'View') {
        this.QuotationTermsForm = new FormGroup({
          quotationTermsName: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required),
          quotationTerms: new FormControl({value: '', disabled: true}, Validators.required)
        });
        this.termsView = this.text2;
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.QuotationTermsForm.value);
    }

}