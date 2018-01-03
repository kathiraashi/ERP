import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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
//products
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

const appRoutes: Routes = [
    { path: '',                     component: LoginComponent,                  data: { animation: { value: 'login', } }               },
    { path: 'login',                component: LoginComponent,                  data: { animation: { value: 'login', } }               },
    { path: 'dashboard',            component: DashboardComponent,              data: { animation: { value: 'dashboard', } }           },
    { path: 'ui',                   component: UiComponent,                     data: { animation: { value: 'ui', } }                  },
//Settings
    { path: 'crmSettings',          component: CrmSettingsComponent,            data: { animation: { value: 'crmSettings', } }         },
    { path: 'companySettings',      component: CompanySettingsComponent,        data: { animation: { value: 'companySettings', } }     },
    { path: 'leadsSettings',        component: LeadsSettingsComponent,          data: { animation: { value: 'leadsSettings', } }       },
    { path: 'purchaseSettings',     component: PurchaseSettingsComponent,       data: { animation: { value: 'purchaseSettings', } }    },
    { path: 'accountsSettings',     component: AccountsSettingsComponent,       data: { animation: { value: 'accountsSettings', } }    },
    { path: 'hrmsSettings',         component: HrmsSettingsComponent,           data: { animation: { value: 'hrmsSettings', } }        },
    { path: 'hrSettings',           component: HrSettingsComponent,             data: { animation: { value: 'hrSettings', } }          },
    { path: 'inventorySettings',    component: InventorySettingsComponent,      data: { animation: { value: 'hrmsSettings', } }        },
    { path: 'productSettings',      component: ProductSettingsComponent,        data: { animation: { value: 'productSettings', } }     },
//Products
    { path: 'products',             component: ProductsComponent,               data: { animation: { value: 'products', } }            },
    { path: 'productsAdd',          component: ProductsAddComponent,            data: { animation: { value: 'productsAdd', } }         },
//crm
    { path: 'crmCustomersList',     component: CustomersListComponent,          data: { animation: { value: 'crmCustomersList', } }    },
    { path: 'crmCreatCustomers',    component: CustomersCreateComponent,        data: { animation: { value: 'crmCreatCustomers', } }   },
    { path: 'crmViewCustomers',     component: CustomersViewComponent,          data: { animation: { value: 'crmViewCustomers', } }    },
    
    { path: 'crmQuotationsList',    component: QuotationsListComponent,         data: { animation: { value: 'crmQuotationsList', } }   },
    { path: 'crmCreateQuotations',  component: QuotationsCreateComponent,       data: { animation: { value: 'crmCreateQuotations', } } },
    { path: 'crmViewQuotations',    component: QuotationsViewComponent,         data: { animation: { value: 'crmViewQuotations', } }   },

    { path: 'crmSaleOrdersList',    component: SaleOrdersListComponent,         data: { animation: { value: 'crmSaleOrdersList', } }   },
    { path: 'crmCreateSaleOrders',  component: SaleOrdersCreateComponent,       data: { animation: { value: 'crmCreateSaleOrders', } } },
    { path: 'crmViewSaleOrders',    component: SaleOrdersViewComponent,         data: { animation: { value: 'crmViewSaleOrders', } }   }
    
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
