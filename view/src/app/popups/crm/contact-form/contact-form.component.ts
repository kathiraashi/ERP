import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  ContactForm: FormGroup;
  ContactRoles = [ 'ContactRole 1', 'ContactRole 2', 'ContactRole 3'];
  disabled = false ;
  floatLabel = 'auto';
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<ContactFormComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {
      if (this.data.type == 'Add') {
        this.ContactForm = new FormGroup({
          name: new FormControl('', Validators.required),
          mobile: new FormControl('', Validators.required),
          phone: new FormControl('',  Validators.required),
          email: new FormControl('',  Validators.required),
          jobTitle: new FormControl('', Validators.required),
          contactRole: new FormControl('', Validators.required),
          notes: new FormControl('', Validators.required)
        });
      }

      if (this.data.type == 'Edit') {
        this.ContactForm = new FormGroup({
          name: new FormControl(this.data.value.vin, Validators.required),
          mobile: new FormControl(this.data.value.year, Validators.required),
          phone: new FormControl(this.data.value.color,  Validators.required),
          email: new FormControl(this.data.value.vin,  Validators.required),
          jobTitle: new FormControl(this.data.value.brand, Validators.required),
          contactRole: new FormControl('ContactRole 3', Validators.required),
          notes: new FormControl(this.data.value.vin, Validators.required)
        });
      }

      if (this.data.type == 'View') {
        this.ContactForm = new FormGroup({
          name: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required),
          mobile: new FormControl({value: this.data.value.year, disabled: true}, Validators.required),
          phone: new FormControl({value: this.data.value.color, disabled: true}, Validators.required),
          email: new FormControl({value: this.data.value.vin, disabled: true}, Validators.required),
          jobTitle: new FormControl({value: this.data.value.brand, disabled: true}, Validators.required),
          contactRole: new FormControl({value:'ContactRole 3', disabled: true}, Validators.required),
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
      this.dialogRef.close(this.ContactForm.value);
    }

}
