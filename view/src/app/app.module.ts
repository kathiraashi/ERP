import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//Feture Modules -------------------------------
  import { from } from 'rxjs/observable/from';
  import { TextMaskModule } from 'angular2-text-mask';
  import { BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
  import { AgmCoreModule } from '@agm/core';

//Custome Module --------------------------------
  import { AppRoutingModule } from './app.routing.module';
  import { MaterialModule } from './material.module';
  import { PrimengModule } from './primeng.module';

//Services --------------------------------------
  import { CarService } from './service/carservice';
  import { CustomService } from './service/custome';
  import { DataSharedService } from './service/DataSharedService';

//Popups ----------------------------------------
  //Others
    import { ExampleComponent } from './popups/example/example.component';   
    import { DeleteConfirmationComponent } from './popups/others/delete-confirmation/delete-confirmation.component';
  //Crm
    import { ContactFormComponent } from './popups/crm/contact-form/contact-form.component';
    import { ActivityFormComponent } from './popups/crm/activity-form/activity-form.component'; 
    import { QuoteProductFormComponent } from './popups/crm/quote-product-form/quote-product-form.component';

  //settings
    //Company Settings
      import { CompanyInfoComponent } from './popups/settings/company-settings/company-info/company-info.component';
      import { ContactInfoComponent } from './popups/settings/company-settings/contact-info/contact-info.component';
      import { DepartmentsComponent } from './popups/settings/company-settings/departments/departments.component';
      import { BranchesComponent } from './popups/settings/company-settings/branches/branches.component';
      import { RegistrationInfoComponent } from './popups/settings/company-settings/registration-info/registration-info.component';
    //crm Settings
      import { AccountTypeComponent } from './popups/settings/crm-settings/account-type/account-type.component';
      import { IndustryTypeComponent } from './popups/settings/crm-settings/industry-type/industry-type.component';
      import { OwnershipTypeComponent } from './popups/settings/crm-settings/ownership-type/ownership-type.component';
      import { ActivityTypeComponent } from './popups/settings/crm-settings/activity-type/activity-type.component';
      import { ActivityStatusComponent } from './popups/settings/crm-settings/activity-status/activity-status.component';
      import { ActivityPeriorityComponent } from './popups/settings/crm-settings/activity-periority/activity-periority.component';
      import { PiplineStatusComponent } from './popups/settings/crm-settings/pipline-status/pipline-status.component';
      import { ContactRoleComponent } from './popups/settings/crm-settings/contact-role/contact-role.component';
      import { QuotationTermsComponent } from './popups/settings/crm-settings/quotation-terms/quotation-terms.component';
      import { UniteOfMeasureComponent } from './popups/settings/crm-settings/unite-of-measure/unite-of-measure.component';
      import { OpportunityStatusComponent } from './popups/settings/crm-settings/opportunity-status/opportunity-status.component';


//Components------------------------------------
  //Others
    import { AppComponent } from './app.component';
    import { HeaderComponent } from './header/header.component';
    import { LoginComponent } from './login/login.component';
    import { DashboardComponent } from './dashboard/dashboard.component';
    import { UiComponent } from './ui/ui.component';
  //settings
    import { CrmSettingsComponent } from './settings/crm-settings/crm-settings.component';
    import { CompanySettingsComponent } from './settings/company-settings/company-settings.component';
    import { LeadsSettingsComponent } from './settings/leads-settings/leads-settings.component';
    import { PurchaseSettingsComponent } from './settings/purchase-settings/purchase-settings.component';
    import { AccountsSettingsComponent } from './settings/accounts-settings/accounts-settings.component';
    import { HrmsSettingsComponent } from './settings/hrms-settings/hrms-settings.component';
    import { HrSettingsComponent } from './settings/hr-settings/hr-settings.component';
    import { InventorySettingsComponent } from './settings/inventory-settings/inventory-settings.component';
    import { ProductSettingsComponent } from './settings/product-settings/product-settings.component';
  //Products
    import { ProductsComponent } from './products/products/products.component';
    import { ProductsAddComponent } from './products/products-add/products-add.component';
  //crm
    import { CustomersListComponent } from './crm/customers/customers-list/customers-list.component';
    import { CustomersCreateComponent } from './crm/customers/customers-create/customers-create.component';
    import { CustomersViewComponent } from './crm/customers/customers-view/customers-view.component';
    import { QuotationsCreateComponent } from './crm/quotations/quotations-create/quotations-create.component';
    import { QuotationsListComponent } from './crm/quotations/quotations-list/quotations-list.component';
    import { QuotationsViewComponent } from './crm/quotations/quotations-view/quotations-view.component';
    import { SaleOrdersListComponent } from './crm/sale-orders/sale-orders-list/sale-orders-list.component';
    import { SaleOrdersCreateComponent } from './crm/sale-orders/sale-orders-create/sale-orders-create.component';
    import { SaleOrdersViewComponent } from './crm/sale-orders/sale-orders-view/sale-orders-view.component';
    import { InvoiceCreateComponent } from './crm/invoice/invoice-create/invoice-create.component';
    import { InvoiceListComponent } from './crm/invoice/invoice-list/invoice-list.component';
    import { InvoiceViewComponent } from './crm/invoice/invoice-view/invoice-view.component';

@NgModule({
  declarations: [
      //Componets--------------------------
        //Others
          AppComponent,
          HeaderComponent,
          LoginComponent,
          DashboardComponent,
          UiComponent,
        //Settings
          CrmSettingsComponent,
          CompanySettingsComponent,
          LeadsSettingsComponent,
          PurchaseSettingsComponent,
          AccountsSettingsComponent,
          HrmsSettingsComponent,
          HrSettingsComponent,
          InventorySettingsComponent,
          ProductSettingsComponent,
        //products
          ProductsComponent,
          ProductsAddComponent,
        //crm
          CustomersListComponent,
          CustomersCreateComponent,
          CustomersViewComponent,
          QuotationsCreateComponent,
          QuotationsListComponent,
          QuotationsViewComponent,
          SaleOrdersListComponent,
          SaleOrdersCreateComponent,
          SaleOrdersViewComponent,
          InvoiceCreateComponent,
          InvoiceListComponent,
          InvoiceViewComponent,
      //Popups-----------------------------------
        //others
          ExampleComponent,
          DeleteConfirmationComponent,
        //crm
          ContactFormComponent,
          ActivityFormComponent,
          QuoteProductFormComponent,
        //settings
          //Company Settings
            CompanyInfoComponent,
            ContactInfoComponent,
            DepartmentsComponent,
            BranchesComponent,
            RegistrationInfoComponent,
          //crm settings
            AccountTypeComponent,
            IndustryTypeComponent,
            OwnershipTypeComponent,
            ActivityTypeComponent,
            ActivityStatusComponent,
            ActivityPeriorityComponent,
            PiplineStatusComponent,
            ContactRoleComponent,
            QuotationTermsComponent,
            UniteOfMeasureComponent,
            OpportunityStatusComponent
  ],
  imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        PrimengModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        TextMaskModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyD9sVX8Wudcp2N1Qp23aED0q2pVwehbnGs'})
  ],
  providers: [DataSharedService, CarService, CustomService ],
  bootstrap: [AppComponent],
  entryComponents: [
      //popups------------------------------------
        //others
          ExampleComponent,
          DeleteConfirmationComponent,
        //crm
          ContactFormComponent, 
          ActivityFormComponent, 
          QuoteProductFormComponent,
        //settings
          //company settings
            CompanyInfoComponent,
            ContactInfoComponent,
            DepartmentsComponent,
            BranchesComponent,
            RegistrationInfoComponent,
          //crm settings
            AccountTypeComponent,
            IndustryTypeComponent,
            OwnershipTypeComponent,
            ActivityTypeComponent,
            ActivityStatusComponent,
            ActivityPeriorityComponent,
            PiplineStatusComponent,
            ContactRoleComponent,
            QuotationTermsComponent,
            UniteOfMeasureComponent,
            OpportunityStatusComponent

  ]
})
export class AppModule { }
