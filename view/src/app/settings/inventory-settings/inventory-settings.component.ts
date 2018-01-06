// default modules
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

//Feture Modules
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { MatDialog, MatDialogRef } from '@angular/material';

//custome Modules
import { Car} from '../../domain/car';
import { CarService} from '../../service/carservice';

//popups
import { WarehouseComponent } from '../../popups/settings/inventory-settings/warehouse/warehouse.component';
import { InventoryUniteOfMeasureComponent } from '../../popups/settings/inventory-settings/inventory-unite-of-measure/inventory-unite-of-measure.component';

import { DeleteConfirmationComponent } from '../../popups/others/delete-confirmation/delete-confirmation.component';


@Component({
  selector: 'app-inventory-settings',
  templateUrl: './inventory-settings.component.html',
  styleUrls: ['./inventory-settings.component.css'],
  providers: [ MessageService ]
})
export class InventorySettingsComponent implements OnInit {
  
// datatable primng
cars: Car[];
cols: any[];
msgs: Message[] = [];



constructor(  public dialog: MatDialog,
              private carService: CarService,
              private messageService: MessageService 
            ) { }

// material dialog 
    WarehouseDialogRef: MatDialogRef<WarehouseComponent>;
    UniteOfMeasureDialogRef: MatDialogRef<InventoryUniteOfMeasureComponent>;

    DeleteConfirmationDialogRef: MatDialogRef<DeleteConfirmationComponent>;

  ngOnInit() {
    this.carService.getCarsMedium().then(cars => this.cars = cars);
  }//ngOnInit


  // Forms Popups
    //Warehouse
      AddWarehouse() {
        let WarehouseDialogRef = this.dialog.open(WarehouseComponent, { width:'60%', data: { Header:'Warehouse Creat Form', type:'Add' } });
        WarehouseDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      EditWarehouse(car: Car) {
        let WarehouseDialogRef = this.dialog.open(WarehouseComponent, { width:'60%', data: { Header:'Warehouse Edit Form', type:'Edit', value:car } });
        WarehouseDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      ViewWarehouse(car: Car) {
        let WarehouseDialogRef = this.dialog.open(WarehouseComponent, { width:'60%', data: { Header:'Warehouse View', type:'View', value:car } });
      }

    //UniteOfMeasure
      AddUniteOfMeasure() {
        let UniteOfMeasureDialogRef = this.dialog.open(InventoryUniteOfMeasureComponent, { width:'60%', data: { Header:'Unite Of Measure Creat Form', type:'Add' } });
        UniteOfMeasureDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      EditUniteOfMeasure(car: Car) {
        let UniteOfMeasureDialogRef = this.dialog.open(InventoryUniteOfMeasureComponent, { width:'60%', data: { Header:'Unite Of Measure Edit Form', type:'Edit', value:car } });
        UniteOfMeasureDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      ViewUniteOfMeasure(car: Car) {
        let UniteOfMeasureDialogRef = this.dialog.open(InventoryUniteOfMeasureComponent, { width:'60%', data: { Header:'Unite Of Measure View', type:'View', value:car } });
      }


    //Delete Confirmation
      DeleteConfirmation(car: Car) {
        let DeleteConfirmationDialogRef = this.dialog.open(DeleteConfirmationComponent, { width:'330px', disableClose:true,  data: { Header:'Delete Confirmation', value:car } });
        DeleteConfirmationDialogRef.afterClosed().subscribe(result => this.returnDeleteConfirmation(result));
      }


      returnDeleteConfirmation(result){
        if(result === "Yes"){
          this.msgs = [];
          this.msgs.push({severity:'success', summary:'Alert Message', detail:'Deleted'});
        }else{
          this.msgs = [];
          this.msgs.push({severity:'warn', summary:'Alert Message', detail:'Declined'})
        }
      }



  handleChange(e) {
    // console.log(e.index);
    // console.log(e.originalEvent.target.innerText);
  }


}
