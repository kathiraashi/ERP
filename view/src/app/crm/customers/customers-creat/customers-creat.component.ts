// default modules
import { Component, OnInit, TemplateRef  } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

@Component({
  selector: 'app-customers-creat',
  templateUrl: './customers-creat.component.html',
  styleUrls: ['./customers-creat.component.css']
})
export class CustomersCreatComponent implements OnInit {

  //form
  CreatCustomerForm: FormGroup;

  AccountTypes = [ 'account 1', 'account 2', 'account 3'];
  IndustryTypes = [ 'industry 1', 'industry 2', 'industry 3'];
  OwnershipTypes = [ 'ownership 1', 'ownership 2', 'ownership 3'];

  constructor(private formBuilder: FormBuilder) { this.createForm(); } //constructor

  ngOnInit() {
  }

  createForm(){
    this.CreatCustomerForm = this.formBuilder.group({ 
      createdBy: ['', Validators.compose([ Validators.required ])],
      customerName: ['', Validators.compose([ Validators.required ])],
      phoneNumber: ['', Validators.compose([ Validators.required ])],
      emailAddress: ['', Validators.compose([ Validators.required ])],
      website: ['', Validators.compose([ Validators.required ])],
      noOfEployees: ['', Validators.compose([ Validators.required ])],
      accountType: ['', Validators.compose([ Validators.required ])],
      industryType: ['', Validators.compose([ Validators.required ])],
      ownershipType: ['', Validators.compose([ Validators.required ])]
    });
  };//createForm

}
