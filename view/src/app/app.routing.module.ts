import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiComponent } from './ui/ui.component';
import { CrmSettingsComponent } from './settings/crm-settings/crm-settings.component';
import { CompanySettingsComponent } from './settings/company-settings/company-settings.component';
import { LeadsSettingsComponent } from './settings/leads-settings/leads-settings.component';
import { PurchaseSettingsComponent } from './settings/purchase-settings/purchase-settings.component';
import { AccountsSettingsComponent } from './settings/accounts-settings/accounts-settings.component';


const appRoutes: Routes = [
    { path: '',                   component: LoginComponent,              data: { animation: { value: 'login', } }               },
    { path: 'login',              component: LoginComponent,              data: { animation: { value: 'login', } }               },
    { path: 'dashboard',          component: DashboardComponent,          data: { animation: { value: 'dashboard', } }           },
    { path: 'ui',                 component: UiComponent,                 data: { animation: { value: 'ui', } }                  },
    { path: 'crmSettings',        component: CrmSettingsComponent,        data: { animation: { value: 'crmSettings', } }         },
    { path: 'companySettings',    component: CompanySettingsComponent,    data: { animation: { value: 'companySettings', } }     },
    { path: 'leadsSettings',      component: LeadsSettingsComponent,      data: { animation: { value: 'leadsSettings', } }       },
    { path: 'purchaseSettings',   component: PurchaseSettingsComponent,   data: { animation: { value: 'purchaseSettings', } }    },
    { path: 'accountsSettings',   component: AccountsSettingsComponent,   data: { animation: { value: 'accountsSettings', } }    }
  ];
  

@NgModule({
    declarations: [ ],
    imports: [ RouterModule.forRoot(appRoutes,
        { enableTracing: true }
      )],
    providers: [],
    bootstrap: []
  })
  export class AppRoutingModule { }
