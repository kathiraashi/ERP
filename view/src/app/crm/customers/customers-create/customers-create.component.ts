// default modules
import { Component, OnInit, TemplateRef  } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.css']
})
export class CustomersCreateComponent implements OnInit {

  //form
  CreatCustomerForm: FormGroup;

  AccountTypes = [ 'account 1', 'account 2', 'account 3', 'account 4', 'account 5', 'account 6'];
  IndustryTypes = [ 'industry 1', 'industry 2', 'industry 3', 'industry 4', 'industry 5', 'industry 6'];
  OwnershipTypes = [ 'ownership 1', 'ownership 2', 'ownership 3', 'ownership 4', 'ownership 5', 'ownership 6'];
  Countries = [ 'Country 1', 'Country 2', 'Country 3', 'Country 4', 'Country 5', 'Country 6'];
  States = [ 'State 1', 'State 2', 'State 3', 'State 4', 'State 5', 'State 6'];
  Cities = [ 'City 1', 'City 2', 'City 3', 'City 4', 'City 5', 'City 6'];

  constructor(private formBuilder: FormBuilder) { this.createForm(); } //constructor

  ngOnInit() {
  }

  createForm(){
    this.CreatCustomerForm = this.formBuilder.group({ 
      companyName: ['', Validators.compose([ Validators.required ])],
      phoneNumber: ['', Validators.compose([ Validators.required ])],
      emailAddress: ['', Validators.compose([ Validators.required ])],
      website: ['', Validators.compose([ Validators.required ])],
      noOfEployees: ['', Validators.compose([ Validators.required ])],
      accountType: ['', Validators.compose([ Validators.required ])],
      industryType: ['', Validators.compose([ Validators.required ])],
      ownershipType: ['', Validators.compose([ Validators.required ])],
      notes: ['', Validators.compose([ Validators.required ])],
      street: ['', Validators.compose([ Validators.required ])],
      area: ['', Validators.compose([ Validators.required ])],
      country: ['', Validators.compose([ Validators.required ])],
      state: ['', Validators.compose([ Validators.required ])],
      city: ['', Validators.compose([ Validators.required ])],
      zipCode: ['', Validators.compose([ Validators.required ])],
      sameAddress: ['', Validators.compose([ Validators.required ])],
      billStreet: ['', Validators.compose([ Validators.required ])],
      billArea: ['', Validators.compose([ Validators.required ])],
      billCountry: ['', Validators.compose([ Validators.required ])],
      billState: ['', Validators.compose([ Validators.required ])],
      billCity: ['', Validators.compose([ Validators.required ])],
      billZipCode: ['', Validators.compose([ Validators.required ])]
    });
  };//createForm

}
