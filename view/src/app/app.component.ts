import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog: MatDialog) {}

  }
  
