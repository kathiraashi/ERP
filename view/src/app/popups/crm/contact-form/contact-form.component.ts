import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  CustomerForm: FormGroup;
  ContactRoles = [ 'ContactRole 1', 'ContactRole 2', 'ContactRole 3'];
  values;
  
    constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<ContactFormComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) { }
  
    ngOnInit() {
      this.CustomerForm = this.formBuilder.group({ 
        name: ['', Validators.compose([  ])],
        mobile: ['', Validators.compose([  ])],
        phone: ['', Validators.compose([  ])],
        email: ['', Validators.compose([  ])],
        jobTitle: ['', Validators.compose([  ])],
        contactRole: ['', Validators.compose([  ])],
        notes: ['', Validators.compose([  ])]
      });

      if (this.data.type == 'Edit') {
        this.CustomerForm.setValue({
          name : this.data.value.vin,
          mobile : this.data.value.year,
          phone : this.data.value.color,
          email : this.data.value.vin,
          jobTitle : this.data.value.brand,
          contactRole : 'ContactRole 3',
          notes : this.data.value.vin
        });
      }
    }
  
    close() {
      this.dialogRef.close();
    }

    submit() {
      this.dialogRef.close(this.CustomerForm.value);
    }

}
