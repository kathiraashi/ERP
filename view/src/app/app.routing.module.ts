import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'


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
