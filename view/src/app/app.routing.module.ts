import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiComponent } from './ui/ui.component';


const appRoutes: Routes = [
    { 
      path: '', 
      component: LoginComponent,
      data: { animation: { value: 'login', } } 
    },
    { 
      path: 'login', 
      component: LoginComponent, 
      data: { animation: { value: 'login', } }
    },
    { 
      path: 'dashboard', 
      component: DashboardComponent, 
      data: { animation: { value: 'dashboard', } }
    },
    { 
      path: 'ui', 
      component: UiComponent, 
      data: { animation: { value: 'ui', } }
    }
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
