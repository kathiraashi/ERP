import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { pageLoader, pageIdendity, pageContent } from '../animations/loader.animation';
import { ExampleComponent } from '../popups/example/example.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css'],
  animations:[ pageLoader ]
})
export class UiComponent implements OnInit {

  Spinner = false;
  Loader = false;
  pageLoaderAction = 'pageLoaderstart';
  popupReturnValue = '';

  exampleDialogRef: MatDialogRef<ExampleComponent>;

  constructor(public dialog: MatDialog) {}


  openDialog() {
    this.exampleDialogRef = this.dialog.open(ExampleComponent, {
      hasBackdrop: false
    });

    this.exampleDialogRef
        .afterClosed()
        .pipe(filter(name => name))
        .subscribe(name =>  this.popupReturnValue = name );
   }

  
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


