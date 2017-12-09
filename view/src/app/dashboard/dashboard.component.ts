import { Component, OnInit } from '@angular/core';
import { pageLoader, pageIdendity, pageContent } from '../animations/loader.animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations:[ pageLoader ]
})
export class DashboardComponent implements OnInit {
  Spinner = false;
  Loader = false;
  pageLoaderAction = 'pageLoaderstart';

  constructor() {}


  ngOnInit() {
    setTimeout(() =>  { this.Spinner = true; this.Loader = true },1000 );
    setTimeout(() => { this.pageLoaderAction = "pageLoaderend"; setTimeout(() => { this.Spinner = false; this.Loader = false;},1000 ); },4000 );
    setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart1"; } }, 1000 );
    setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart2"; } }, 2000 );
    setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart3"; } }, 3000 );
    setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart4"; } }, 4000 );
    setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart5"; } }, 5000 );
  }
}
