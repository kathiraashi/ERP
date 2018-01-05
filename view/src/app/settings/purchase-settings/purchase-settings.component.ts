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
import { VendorQuoteTermsComponent  } from '../../popups/settings/purchase-settings/vendor-quote-terms/vendor-quote-terms.component';

import { DeleteConfirmationComponent } from '../../popups/others/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-purchase-settings',
  templateUrl: './purchase-settings.component.html',
  styleUrls: ['./purchase-settings.component.css'],
  providers: [ MessageService ]
})
export class PurchaseSettingsComponent implements OnInit {

 // datatable primng
 cars: Car[];
 cols: any[];
 msgs: Message[] = [];

 constructor(  public dialog: MatDialog,
               private carService: CarService,
               private messageService: MessageService 
             ) { }

// material dialog 
  VendorQuoteTermsDialogRef: MatDialogRef<VendorQuoteTermsComponent>;

  DeleteConfirmationDialogRef: MatDialogRef<DeleteConfirmationComponent>;


 ngOnInit() {
    this.carService.getCarsMedium().then(cars => this.cars = cars);
 }//ngOnInit

 // Forms Popups
      //Lead Source
        AddVendorQuoteTerms() {
          let VendorQuoteTermsDialogRef = this.dialog.open(VendorQuoteTermsComponent, { width:'60%', data: { Header:'Vendor Quote Terms Creat Form', type:'Add' } });
          VendorQuoteTermsDialogRef.afterClosed().subscribe(result => console.log(result));
        }
        EditVendorQuoteTerms(car: Car) {
          let VendorQuoteTermsDialogRef = this.dialog.open(VendorQuoteTermsComponent, { width:'60%', data: { Header:'Vendor Quote Terms Edit Form', type:'Edit', value:car } });
          VendorQuoteTermsDialogRef.afterClosed().subscribe(result => console.log(result));
        }
        ViewVendorQuoteTerms(car: Car) {
          let VendorQuoteTermsDialogRef = this.dialog.open(VendorQuoteTermsComponent, { width:'60%', data: { Header:'Vendor Quote Terms View', type:'View', value:car } });
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
