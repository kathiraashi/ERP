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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    UiComponent,
    ExampleComponent,
    CrmSettingsComponent,
    CompanySettingsComponent
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
    TextMaskModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent],
  entryComponents: [ExampleComponent]
})
export class AppModule { }
