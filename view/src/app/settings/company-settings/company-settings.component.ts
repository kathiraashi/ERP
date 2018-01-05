// default modules
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

//Feture Modules
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { MatDialog, MatDialogRef } from '@angular/material';

//custome Modules
import { Car} from '../../domain/car';
import { CarService} from '../../service/carservice';

//popups
import { CompanyInfoComponent } from '../../popups/settings/company-settings/company-info/company-info.component';
import { ContactInfoComponent } from '../../popups/settings/company-settings/contact-info/contact-info.component';
import { DepartmentsComponent } from '../../popups/settings/company-settings/departments/departments.component';
import { BranchesComponent } from '../../popups/settings/company-settings/branches/branches.component';
import { RegistrationInfoComponent } from '../../popups/settings/company-settings/registration-info/registration-info.component';

import { DeleteConfirmationComponent } from '../../popups/others/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.css'],
  providers: [ MessageService ]
})
export class CompanySettingsComponent implements OnInit {


  // datatable primng
  cars: Car[];
  cols: any[];
  msgs: Message[] = [];

  data;

  constructor(  public dialog: MatDialog,
                private carService: CarService,
                private messageService: MessageService 
              ) { }  


// material dialog 
  CompanyInfoDialogRef: MatDialogRef<CompanyInfoComponent>;
  ContactInfoDialogRef: MatDialogRef<ContactInfoComponent>;
  DepartmentsDialogRef: MatDialogRef<DepartmentsComponent>;
  BranchesDialogRef: MatDialogRef<BranchesComponent>;
  RegistrationInfoDialogRef: MatDialogRef<RegistrationInfoComponent>;

  DeleteConfirmationDialogRef: MatDialogRef<DeleteConfirmationComponent>;

  ngOnInit() {
     this.carService.getCarsMedium().then(cars => this.cars = cars);
  }//ngOnInit


  // Forms Popups

      //Company Info
          EditCompanyInfo(car: Car) {
            let CompanyInfoDialogRef = this.dialog.open(CompanyInfoComponent, { data: { Header:'Company Info Edit Form', type:'Edit', value:car } });
            CompanyInfoDialogRef.afterClosed().subscribe(result => console.log(result));
          }

      //Contact Info
          AddContactInfo() {
            let ContactInfoDialogRef = this.dialog.open(ContactInfoComponent, { width:'60%', data: { Header:'Contact Info Creat Form', type:'Add' } });
            ContactInfoDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditContactInfo(car: Car) {
            let ContactInfoDialogRef = this.dialog.open(ContactInfoComponent, { width:'60%', data: { Header:'Contact Info Edit Form', type:'Edit', value:car } });
            ContactInfoDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewContactInfo(car: Car) {
            let ContactInfoDialogRef = this.dialog.open(ContactInfoComponent, { width:'60%', data: { Header:'Contact Info View', type:'View', value:car } });
          }

      //Departments
          AddDepartments() {
            let DepartmentsDialogRef = this.dialog.open(DepartmentsComponent, { width:'60%', data: { Header:'Department Creat Form', type:'Add' } });
            DepartmentsDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditDepartments(car: Car) {
            let DepartmentsDialogRef = this.dialog.open(DepartmentsComponent, { width:'60%', data: { Header:'Departments Edit Form', type:'Edit', value:car } });
            DepartmentsDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewDepartments(car: Car) {
            let DepartmentsDialogRef = this.dialog.open(DepartmentsComponent, { width:'60%', data: { Header:'Department View', type:'View', value:car } });
          }

      //Branches
          AddBranches() {
            let BranchesDialogRef = this.dialog.open(BranchesComponent, { width:'60%', data: { Header:'Branches Creat Form', type:'Add' } });
            BranchesDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditBranches(car: Car) {
            let BranchesDialogRef = this.dialog.open(BranchesComponent, { width:'60%', data: { Header:'Branches Edit Form', type:'Edit', value:car } });
            BranchesDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewBranches(car: Car) {
            let BranchesDialogRef = this.dialog.open(BranchesComponent, { width:'60%', data: { Header:'Branches View', type:'View', value:car } });
          }

      //Registration Info
          AddRegistrationInfo() {
            let RegistrationInfoDialogRef = this.dialog.open(RegistrationInfoComponent, { width:'60%', data: { Header:'Registration Info Creat Form', type:'Add' } });
            RegistrationInfoDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditRegistrationInfo(car: Car) {
            let RegistrationInfoDialogRef = this.dialog.open(RegistrationInfoComponent, { width:'60%', data: { Header:'Registration Info Edit Form', type:'Edit', value:car } });
            RegistrationInfoDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewRegistrationInfo(car: Car) {
            let RegistrationInfoDialogRef = this.dialog.open(RegistrationInfoComponent, { width:'60%', data: { Header:'Registration Info View', type:'View', value:car } });
          }

      //Delete Confirmation
          DeleteConfirmation(car: Car) {
            let DeleteConfirmationDialogRef = this.dialog.open(DeleteConfirmationComponent, { width:'330px', disableClose:true,  data: { Header:'Delete Confirmation', value:car } });
            DeleteConfirmationDialogRef.afterClosed().subscribe(result => this.returnDeleteConfirmation(result));
          }


  returnDeleteConfirmation(result){
    if(result === "Yes"){
      this.msgs = [];
      this.msgs.push({severity:'success', summary:'Alert Message', detail:'Deleted'});
    }else{
      this.msgs = [];
      this.msgs.push({severity:'warn', summary:'Alert Message', detail:'Declined'})
    }
  }


  handleChange(e) {
    // console.log(e.index);
    // console.log(e.originalEvent.target.innerText);
  }


}
