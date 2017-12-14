import { Component, Inject } from '@angular/core';
import {Router, NavigationEnd   } from '@angular/router';
import { testAnimation, loginToAny, zoomAnimation, fadeAnimation, yslideAnimation,  xslideAnimation, xslidefadeAnimation, yslidefadeAnimation } from './animations/fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ xslidefadeAnimation ]
})
export class AppComponent {

  UserLoggedIn : boolean;
  
  constructor(private router: Router) { 

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


  prepRouteState(outlet: any) {
    // const animation = outlet.activatedRouteData['animation'] || {};
    // return animation['value'] || null;
  };

  animationStarted(){
    console.log('Started');
  };

  
  animationDone(){
    console.log('Done');
  };


  }
  
