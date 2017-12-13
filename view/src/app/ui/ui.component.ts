import { ViewChild, Component, OnInit, TemplateRef  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { pageLoader, pageIdendity, pageContent } from '../animations/loader.animation';
import { ExampleComponent } from '../popups/example/example.component';
import { filter } from 'rxjs/operators';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {FileUpload } from 'primeng/primeng';

import {Car} from '../domain/car';
import {CarService} from '../service/carservice';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css'],
  animations:[ pageLoader ],
  providers: [MessageService]
})
export class UiComponent implements OnInit {
  @ViewChild('fileInput') fileInput: FileUpload;


// loader
  Spinner = false;
  Loader = false;
  pageLoaderAction = 'pageLoaderstart';

// material dialog 
  popupReturnValue = '';
  exampleDialogRef: MatDialogRef<ExampleComponent>;

// input mask
  public myModel = ''
  public mask = [ /[1-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

// datatable primng
  cars1: Car[];
  cars: Car[];
  cols: any[];
  selectedCar: Car;
  dialogVisible: boolean;
  stacked: boolean;
  msgs: Message[] = [];
  uploadedFiles: any[] = [];

  

  constructor( public dialog: MatDialog,
               private modalService: BsModalService,
               private carService: CarService,
               private messageService: MessageService ) {}


// material dialog
  openDialog() {
    this.exampleDialogRef = this.dialog.open(ExampleComponent, {
      hasBackdrop: true
    });

    this.exampleDialogRef
        .afterClosed()
        .pipe(filter(name => name))
        .subscribe(name =>  this.popupReturnValue = name );
    }

// ngx-bootstrao  dialog
    bsValue: Date = new Date();
    bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
  
   ngOnInit() {

// page loader and spinner
    setTimeout(() =>  { this.Spinner = true; this.Loader = true },1000 );
    setTimeout(() => { this.pageLoaderAction = "pageLoaderend"; setTimeout(() => { this.Spinner = false; this.Loader = false;},1000 ); },4000 );
    setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart1"; } }, 1000 );
    setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart2"; } }, 2000 );
    setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart3"; } }, 3000 );
    setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart4"; } }, 4000 );
    setTimeout(() => { if(this.pageLoaderAction != "pageLoaderend" ){ this.pageLoaderAction = "pageLoaderstart5"; } }, 5000 );
  
//primeng data tabel 
    this.carService.getCarsLarge().then(cars => this.cars = cars);
    this.carService.getCarsMedium().then(cars => this.cars1 = cars);
    this.cols = [
        {field: 'vin', header: 'Vin'},
        {field: 'year', header: 'Year'},
        {field: 'brand', header: 'Brand'},
        {field: 'color', header: 'Color'},
        {field: 'price', header: 'Price'}
    ];

  }

//primeng datatabel
  showCar(car: Car) {
    this.selectedCar = car;
    this.dialogVisible = true;
  }

  calculateGroupTotal(brand: string) {
    let total = 0;
    if(this.cars1) {
        for(let car of this.cars1) {
            if(car.brand === brand) {
                total += car.price;
            }
        } 
      }
    return total;
  }

  showViaService() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

  clearViaService() {
      this.messageService.clear();
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
        console.log(file);
    }

    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
}


}


