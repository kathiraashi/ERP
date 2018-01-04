// default modules
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

//Feture Modules
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
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
  dialogVisible: boolean;
  msgs: Message[] = [];

  data;


  //modal 
  modalRef: BsModalRef;
  vin;

  constructor(  public dialog: MatDialog,
                private modalService: BsModalService,
                private carService: CarService,
                private messageService: MessageService 
              ) { }  


// material dialog 
  CompanyInfoDialogRef: MatDialogRef<CompanyInfoComponent>;
  ContactInfoDialogRef: MatDialogRef<ContactInfoComponent>;
  DepartmentsDialogRef: MatDialogRef<DepartmentsComponent>;
  BranchesDialogRef: MatDialogRef<BranchesComponent>;
  RegistrationInfoDialogRef: MatDialogRef<RegistrationInfoComponent>;

  ngOnInit() {
     this.carService.getCarsMedium().then(cars => this.cars = cars);
  }//ngOnInit


  // Forms Popups

      //Company Info
          EditCompanyInfo(car: Car) {
            console.log(car);
            let CompanyInfoDialogRef = this.dialog.open(CompanyInfoComponent, { data: { Header:'Company Info Edit Form', type:'Edit', value:car } });
            CompanyInfoDialogRef.afterClosed().subscribe(result => console.log(result));
          }//ContactEdit

      //Contact Info
          AddContactInfo() {
            let ContactInfoDialogRef = this.dialog.open(ContactInfoComponent, { width:'60%', data: { Header:'Contact Info Creat Form', type:'Add' } });
            ContactInfoDialogRef.afterClosed().subscribe(result => console.log(result));
          }//AddContactInfo
          EditContactInfo(car: Car) {
            let ContactInfoDialogRef = this.dialog.open(ContactInfoComponent, { width:'60%', data: { Header:'Contact Info Edit Form', type:'Edit', value:car } });
            ContactInfoDialogRef.afterClosed().subscribe(result => console.log(result));
          }//EditContactInfo
          ViewContactInfo(car: Car) {
            let ContactInfoDialogRef = this.dialog.open(ContactInfoComponent, { width:'60%', data: { Header:'Contact Info View', type:'View', value:car } });
          }//ViewContactInfo

      //Departments
          AddDepartments() {
            let DepartmentsDialogRef = this.dialog.open(DepartmentsComponent, { width:'60%', data: { Header:'Department Creat Form', type:'Add' } });
            DepartmentsDialogRef.afterClosed().subscribe(result => console.log(result));
          }//AddDepartments
          EditDepartments(car: Car) {
            let DepartmentsDialogRef = this.dialog.open(DepartmentsComponent, { width:'60%', data: { Header:'Departments Edit Form', type:'Edit', value:car } });
            DepartmentsDialogRef.afterClosed().subscribe(result => console.log(result));
          }//EditDepartments
          ViewDepartments(car: Car) {
            let DepartmentsDialogRef = this.dialog.open(DepartmentsComponent, { width:'60%', data: { Header:'Department View', type:'View', value:car } });
          }//ViewDepartments

      //Branches
          AddBranches() {
            let BranchesDialogRef = this.dialog.open(BranchesComponent, { width:'60%', data: { Header:'Branches Creat Form', type:'Add' } });
            BranchesDialogRef.afterClosed().subscribe(result => console.log(result));
          }//AddBranches
          EditBranches(car: Car) {
            let BranchesDialogRef = this.dialog.open(BranchesComponent, { width:'60%', data: { Header:'Branches Edit Form', type:'Edit', value:car } });
            BranchesDialogRef.afterClosed().subscribe(result => console.log(result));
          }//EditBranches
          ViewBranches(car: Car) {
            let BranchesDialogRef = this.dialog.open(BranchesComponent, { width:'60%', data: { Header:'Branches View', type:'View', value:car } });
          }//ViewBranches

      //Registration Info
          AddRegistrationInfo() {
            let RegistrationInfoDialogRef = this.dialog.open(RegistrationInfoComponent, { width:'60%', data: { Header:'Registration Info Creat Form', type:'Add' } });
            RegistrationInfoDialogRef.afterClosed().subscribe(result => console.log(result));
          }//AddBranches
          EditRegistrationInfo(car: Car) {
            let RegistrationInfoDialogRef = this.dialog.open(RegistrationInfoComponent, { width:'60%', data: { Header:'Registration Info Edit Form', type:'Edit', value:car } });
            RegistrationInfoDialogRef.afterClosed().subscribe(result => console.log(result));
          }//EditBranches
          ViewRegistrationInfo(car: Car) {
            let RegistrationInfoDialogRef = this.dialog.open(RegistrationInfoComponent, { width:'60%', data: { Header:'Registration Info View', type:'View', value:car } });
          }//ViewBranches




  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirmDelete(): void {
    this.modalRef.hide();
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Alert Message', detail:'Deleted'});
  }
 
  declineDelete(): void {
    this.modalRef.hide();
    this.msgs = [];
    this.msgs.push({severity:'warn', summary:'Alert Message', detail:'Declined'});
  }


  handleChange(e) {
    // console.log(e.index);
    // console.log(e.originalEvent.target.innerText);
  }


}
