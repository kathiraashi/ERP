import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ExampleComponent>
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      filename: ''
    })
  }

  submit(form) {
    this.dialogRef.close(`${form.value.filename}`);
  }

}
