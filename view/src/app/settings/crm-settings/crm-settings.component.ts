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
import { AccountTypeComponent } from '../../popups/settings/crm-settings/account-type/account-type.component';
import { IndustryTypeComponent } from '../../popups/settings/crm-settings/industry-type/industry-type.component';
import { OwnershipTypeComponent } from '../../popups/settings/crm-settings/ownership-type/ownership-type.component';
import { ActivityTypeComponent } from '../../popups/settings/crm-settings/activity-type/activity-type.component';
import { ActivityStatusComponent } from '../../popups/settings/crm-settings/activity-status/activity-status.component';
import { ActivityPriorityComponent } from '../../popups/settings/crm-settings/activity-priority/activity-priority.component';
import { PiplineStatusComponent } from '../../popups/settings/crm-settings/pipline-status/pipline-status.component';
import { ContactRoleComponent } from '../../popups/settings/crm-settings/contact-role/contact-role.component';
import { QuotationTermsComponent } from '../../popups/settings/crm-settings/quotation-terms/quotation-terms.component';
import { UniteOfMeasureComponent } from '../../popups/settings/crm-settings/unite-of-measure/unite-of-measure.component';
import { OpportunityStatusComponent } from '../../popups/settings/crm-settings/opportunity-status/opportunity-status.component';

import { DeleteConfirmationComponent } from '../../popups/others/delete-confirmation/delete-confirmation.component';

//Services
import { CrmSettingsService } from '../../service/settings/crm-settings-service'

@Component({
  selector: 'app-crm-settings',
  templateUrl: './crm-settings.component.html',
  styleUrls: ['./crm-settings.component.css'],
  providers: [ MessageService ]
})
export class CrmSettingsComponent implements OnInit {


  // datatable primng
  accountTypeResult = [];
  accountTypeDatas= [];
  deleteUrl;
  deleteId;
  cars: Car[];
  cols: any[];
  msgs: Message[] = [];


  text1: string = '<div>Hello World!</div><div>Add Quotation Terms</div>';
  text2: string = '<div>Hello World!</div><div>Edit Quotation Terms</div>';

  constructor(  public dialog: MatDialog,
                private crmSettingsService: CrmSettingsService,
                private carService: CarService,
                private messageService: MessageService 
              ) {  } 

// material dialog 
  AccountTypeDialogRef: MatDialogRef<AccountTypeComponent>;
  IndustryTypeDialogRef: MatDialogRef<IndustryTypeComponent>;
  OwnershipTypeDialogRef: MatDialogRef<OwnershipTypeComponent>;
  ActivityTypeDialogRef: MatDialogRef<ActivityTypeComponent>;
  ActivityStatusDialogRef: MatDialogRef<ActivityStatusComponent>;
  ActivityPriorityDialogRef: MatDialogRef<ActivityPriorityComponent>;
  PiplineStatusDialogRef: MatDialogRef<PiplineStatusComponent>;
  ContactRoleDialogRef: MatDialogRef<ContactRoleComponent>;
  QuotationTermsDialogRef: MatDialogRef<QuotationTermsComponent>;
  UniteOfMeasureDialogRef: MatDialogRef<UniteOfMeasureComponent>;
  OpportunityStatusDialogRef: MatDialogRef<OpportunityStatusComponent>;

  DeleteConfirmationDialogRef: MatDialogRef<DeleteConfirmationComponent>;

  ngOnInit() {
     this.carService.getCarsMedium().then(cars => this.cars = cars);
     this.crmSettingsService.getAccountType().subscribe( datas => this.accountTypes(datas) );
  }//ngOnInit

    accountTypes(datas){
      if(datas.status === "True"){
        this.accountTypeDatas = datas.data;
      }else{
        console.log(datas.message);
      }
    }

    AddAccountTypeReturn(result){
      if(result === "Close"){
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Alert Message', detail:'Form Closed'});
      }else{
        this.crmSettingsService.addAccountType(result)
          .subscribe( datas => {
            this.accountTypeDatas.push(datas.data); 
            this.accountTypeDatas = this.accountTypeDatas.slice(); 
        });
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Alert Message', detail:'Form Submited'});
      }
    }


    EditAccountTypeReturn(result){
      if(result === "Close"){
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Alert Message', detail:'Form Closed'});
      }else{
        this.crmSettingsService.updateAccountType(result).subscribe( datas => console.log(datas) );
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Alert Message', detail:'Form Submited'});
      }
    }


    // Forms Popups
      //Account Type
          AddAccountType() {
            let AccountTypeDialogRef = this.dialog.open(AccountTypeComponent, { width:'50%', data: { Header:'Account Type Creat Form', type:'Add' } });
            AccountTypeDialogRef.afterClosed().subscribe(result => this.AddAccountTypeReturn(result));
          }
          EditAccountType(data: any) {
             let AccountTypeDialogRef = this.dialog.open(AccountTypeComponent, { width:'50%', data: { Header:'Account Type Edit Form', type:'Edit', value:data } });
             AccountTypeDialogRef.afterClosed().subscribe(result => this.EditAccountTypeReturn(result));
          }
          ViewAccountType(car: Car) {
            let AccountTypeDialogRef = this.dialog.open(AccountTypeComponent, { width:'50%', data: { Header:'Account Type View', type:'View', value:car } });
          }
      //Industry Type
          AddIndustryType() {
            let IndustryTypeDialogRef = this.dialog.open(IndustryTypeComponent, { width:'50%', data: { Header:'Industry Type Creat Form', type:'Add' } });
            IndustryTypeDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditIndustryType(car: Car) {
            let IndustryTypeDialogRef = this.dialog.open(IndustryTypeComponent, { width:'50%', data: { Header:'Industry Type Edit Form', type:'Edit', value:car } });
            IndustryTypeDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewIndustryType(car: Car) {
            let IndustryTypeDialogRef = this.dialog.open(IndustryTypeComponent, { width:'50%', data: { Header:'Industry Type View', type:'View', value:car } });
          }
      //Ownership Type
          AddOwnershipType() {
            let OwnershipTypeDialogRef = this.dialog.open(OwnershipTypeComponent, { width:'50%', data: { Header:'Ownership Type Creat Form', type:'Add' } });
            OwnershipTypeDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditOwnershipType(car: Car) {
            let OwnershipTypeDialogRef = this.dialog.open(OwnershipTypeComponent, { width:'50%', data: { Header:'Ownership Type Edit Form', type:'Edit', value:car } });
            OwnershipTypeDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewOwnershipType(car: Car) {
            let OwnershipTypeDialogRef = this.dialog.open(OwnershipTypeComponent, { width:'50%', data: { Header:'Ownership Type View', type:'View', value:car } });
          }
      //Activity Type
          AddActivityType() {
            let ActivityTypeDialogRef = this.dialog.open(ActivityTypeComponent, { width:'50%', data: { Header:'Activity Type Creat Form', type:'Add' } });
            ActivityTypeDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditActivityType(car: Car) {
            let ActivityTypeDialogRef = this.dialog.open(ActivityTypeComponent, { width:'50%', data: { Header:'Activity Type Edit Form', type:'Edit', value:car } });
            ActivityTypeDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewActivityType(car: Car) {
            let ActivityTypeDialogRef = this.dialog.open(ActivityTypeComponent, { width:'50%', data: { Header:'Activity Type View', type:'View', value:car } });
          }
      //Activity Status
          AddActivityStatus() {
            let ActivityStatusDialogRef = this.dialog.open(ActivityStatusComponent, { width:'50%', data: { Header:'Activity Status Creat Form', type:'Add' } });
            ActivityStatusDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditActivityStatus(car: Car) {
            let ActivityStatusDialogRef = this.dialog.open(ActivityStatusComponent, { width:'50%', data: { Header:'Activity Status Edit Form', type:'Edit', value:car } });
            ActivityStatusDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewActivityStatus(car: Car) {
            let ActivityStatusDialogRef = this.dialog.open(ActivityStatusComponent, { width:'50%', data: { Header:'Activity Status View', type:'View', value:car } });
          }
      //Activity Periority
          AddActivityPriority() {
            let ActivityPriorityDialogRef = this.dialog.open(ActivityPriorityComponent, { width:'50%', data: { Header:'Activity Periority Creat Form', type:'Add' } });
            ActivityPriorityDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditActivityPriority(car: Car) {
            let ActivityPriorityDialogRef = this.dialog.open(ActivityPriorityComponent, { width:'50%', data: { Header:'Activity Periority Edit Form', type:'Edit', value:car } });
            ActivityPriorityDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewActivityPriority(car: Car) {
            let ActivityPriorityDialogRef = this.dialog.open(ActivityPriorityComponent, { width:'50%', data: { Header:'Activity Periority View', type:'View', value:car } });
          }
      //Pipline Status
          AddPiplineStatus() {
            let PiplineStatusDialogRef = this.dialog.open(PiplineStatusComponent, { width:'50%', data: { Header:'Pipline Status Creat Form', type:'Add' } });
            PiplineStatusDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditPiplineStatus(car: Car) {
            let PiplineStatusDialogRef = this.dialog.open(PiplineStatusComponent, { width:'50%', data: { Header:'Pipline Status Edit Form', type:'Edit', value:car } });
            PiplineStatusDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewPiplineStatus(car: Car) {
            let PiplineStatusDialogRef = this.dialog.open(PiplineStatusComponent, { width:'50%', data: { Header:'Pipline Status View', type:'View', value:car } });
          }
      //Contact Role
          AddContactRole() {
            let ContactRoleDialogRef = this.dialog.open(ContactRoleComponent, { width:'50%', data: { Header:'Contact Role Creat Form', type:'Add' } });
            ContactRoleDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditContactRole(car: Car) {
            let ContactRoleDialogRef = this.dialog.open(ContactRoleComponent, { width:'50%', data: { Header:'Contact Role Edit Form', type:'Edit', value:car } });
            ContactRoleDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewContactRole(car: Car) {
            let ContactRoleDialogRef = this.dialog.open(ContactRoleComponent, { width:'50%', data: { Header:'Contact Role View', type:'View', value:car } });
          }
      //Quotation Terms
          AddQuotationTerms() {
            let QuotationTermsDialogRef = this.dialog.open(QuotationTermsComponent, { width:'60%', height:'460px', data: { Header:'Quotation Terms Creat Form', type:'Add' } });
            QuotationTermsDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditQuotationTerms(car: Car) {
            let QuotationTermsDialogRef = this.dialog.open(QuotationTermsComponent, { width:'60%', data: { Header:'Quotation Terms Edit Form', type:'Edit', value:car } });
            QuotationTermsDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewQuotationTerms(car: Car) {
            let ContactInfoDialogRef = this.dialog.open(QuotationTermsComponent, { width:'60%', data: { Header:'Quotation Terms View', type:'View', value:car } });
          }
      //Unite Of Measure
          AddUniteOfMeasure() {
            let UniteOfMeasureDialogRef = this.dialog.open(UniteOfMeasureComponent, { width:'50%', data: { Header:'Unite Of Measure Creat Form', type:'Add' } });
            UniteOfMeasureDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditUniteOfMeasure(car: Car) {
            let UniteOfMeasureDialogRef = this.dialog.open(UniteOfMeasureComponent, { width:'50%', data: { Header:'Unite Of Measure Edit Form', type:'Edit', value:car } });
            UniteOfMeasureDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewUniteOfMeasure(car: Car) {
            let UniteOfMeasureDialogRef = this.dialog.open(UniteOfMeasureComponent, { width:'50%', data: { Header:'Unite Of Measure View', type:'View', value:car } });
          }
      //Opportunity Status
          AddOpportunityStatus() {
            let OpportunityStatusDialogRef = this.dialog.open(OpportunityStatusComponent, { width:'50%', data: { Header:'Opportunity Status Creat Form', type:'Add' } });
            OpportunityStatusDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          EditOpportunityStatus(car: Car) {
            let OpportunityStatusDialogRef = this.dialog.open(OpportunityStatusComponent, { width:'50%', data: { Header:'Opportunity Status Edit Form', type:'Edit', value:car } });
            OpportunityStatusDialogRef.afterClosed().subscribe(result => console.log(result));
          }
          ViewOpportunityStatus(car: Car) {
            let OpportunityStatusDialogRef = this.dialog.open(OpportunityStatusComponent, { width:'50%', data: { Header:'Opportunity Status View', type:'View', value:car } });
          }
        
      //Delete Confirmation
          DeleteConfirmation(data: any) {
            this.deleteId = data._id
            let DeleteConfirmationDialogRef = this.dialog.open(DeleteConfirmationComponent, { width:'330px', disableClose:true,  data: { Header:'Delete Confirmation', value:data } });
            DeleteConfirmationDialogRef.afterClosed().subscribe(result => this.returnDeleteConfirmation(result));
          }


          changeDeleteUrl(url){ this.deleteUrl = url; }


    returnDeleteConfirmation(result){
      if(result === "Yes"){
        if(this.deleteUrl === "AccountType"){  
          this.crmSettingsService.deleteAccountType(this.deleteId)
          .subscribe( datas => { 
              if(datas.status === "True"){
                  let accountTypeData = this.accountTypeDatas.filter(x => x._id == this.deleteId);
                  let accountTypeIndex = this.accountTypeDatas.indexOf(accountTypeData[0]);
                  if (accountTypeIndex >= 0) { this.accountTypeDatas.splice(accountTypeIndex, 1); } 
                  this.accountTypeDatas = this.accountTypeDatas.slice();
              }else{
                  console.log(datas)
              }
           } );
        }
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Alert Message', detail:'Deleted'});
      }else{
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Alert Message', detail:'Declined'});
      }
    }


  handleChange(e) {
    console.log(e.index);
    console.log(e.originalEvent.target.innerText);
  }

}
