import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { TextMaskModule } from 'angular2-text-mask';
import { BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './material.module';
import { PrimengModule } from './primeng.module';

import { CarService } from './service/carservice'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiComponent } from './ui/ui.component';
import { ExampleComponent } from './popups/example/example.component';
import { from } from 'rxjs/observable/from';
import { CrmSettingsComponent } from './settings/crm-settings/crm-settings.component';
import { CompanySettingsComponent } from './settings/company-settings/company-settings.component';
import { LeadsSettingsComponent } from './settings/leads-settings/leads-settings.component';
import { PurchaseSettingsComponent } from './settings/purchase-settings/purchase-settings.component';
import { AccountsSettingsComponent } from './settings/accounts-settings/accounts-settings.component';
import { HrmsSettingsComponent } from './settings/hrms-settings/hrms-settings.component';
import { HrSettingsComponent } from './settings/hr-settings/hr-settings.component';
import { InventorySettingsComponent } from './settings/inventory-settings/inventory-settings.component';
import { ProductSettingsComponent } from './settings/product-settings/product-settings.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductsAddComponent } from './products/products-add/products-add.component';
import { CustomersListComponent } from './crm/customers/customers-list/customers-list.component';
import { CustomersCreateComponent } from './crm/customers/customers-create/customers-create.component';
import { CustomersViewComponent } from './crm/customers/customers-view/customers-view.component';
import { ContactFormComponent } from './popups/crm/contact-form/contact-form.component';
import { ActivityFormComponent } from './popups/crm/activity-form/activity-form.component';
import { QuotationsCreateComponent } from './crm/quotations/quotations-create/quotations-create.component';
import { QuotationsListComponent } from './crm/quotations/quotations-list/quotations-list.component';
import { QuotationsViewComponent } from './crm/quotations/quotations-view/quotations-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    UiComponent,
    ExampleComponent,
    CrmSettingsComponent,
    CompanySettingsComponent,
    LeadsSettingsComponent,
    PurchaseSettingsComponent,
    AccountsSettingsComponent,
    HrmsSettingsComponent,
    HrSettingsComponent,
    InventorySettingsComponent,
    ProductSettingsComponent,
    ProductsComponent,
    ProductsAddComponent,
    CustomersListComponent,
    CustomersCreateComponent,
    CustomersViewComponent,
    ContactFormComponent,
    ActivityFormComponent,
    QuotationsCreateComponent,
    QuotationsListComponent,
    QuotationsViewComponent
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
    OverlayModule,
    A11yModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TextMaskModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyD9sVX8Wudcp2N1Qp23aED0q2pVwehbnGs'})
  ],
  providers: [CarService],
  bootstrap: [AppComponent],
  entryComponents: [ExampleComponent, ContactFormComponent, ActivityFormComponent]
})
export class AppModule { }
