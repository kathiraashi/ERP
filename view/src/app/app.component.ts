import { Component, Inject } from '@angular/core';
import {Router, NavigationEnd   } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UserLoggedIn : boolean;
  constructor(private router: Router, public dialog: MatDialog) { 

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        if(event.url == '/login' || event.url == '/'){
          this.UserLoggedIn = false;
        }else{
          this.UserLoggedIn = true;
        }
      }
    });
    
  }
  }
  
