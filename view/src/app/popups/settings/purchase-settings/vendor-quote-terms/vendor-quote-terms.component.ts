import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vendor-quote-terms',
  templateUrl: './vendor-quote-terms.component.html',
  styleUrls: ['./vendor-quote-terms.component.css']
})
export class VendorQuoteTermsComponent implements OnInit {
  VendorQuotationTermsForm: FormGroup;
  
  termsView;
  text1: string = '<div>Hello World!</div><div>Edit Vendor Quotation Terms</div>';
  text2: string = '<div>Hello World!</div><div>View Vendor Quotation Terms</div>';

  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<VendorQuoteTermsComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {

      if (this.data.type == 'Add') {
        this.VendorQuotationTermsForm = new FormGroup({
          quotationTermsName: new FormControl('', Validators.required),
          quotationTerms:  new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.VendorQuotationTermsForm = new FormGroup({
          quotationTermsName: new FormControl(this.data.value.vin, Validators.required),
          quotationTerms: new FormControl('', Validators.required)
        });
        this.termsView = this.text1;
      }

      if (this.data.type == 'View') {
        this.VendorQuotationTermsForm = new FormGroup({
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
      this.dialogRef.close(this.VendorQuotationTermsForm.value);
    }

}