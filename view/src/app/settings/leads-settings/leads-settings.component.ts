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
import { LeadSourceComponent } from '../../popups/settings/leads-settings/lead-source/lead-source.component';

import { DeleteConfirmationComponent } from '../../popups/others/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-leads-settings',
  templateUrl: './leads-settings.component.html',
  styleUrls: ['./leads-settings.component.css'],
  providers: [ MessageService ]
})
export class LeadsSettingsComponent implements OnInit {

  // datatable primng
  cars: Car[];
  cols: any[];
  msgs: Message[] = [];



  constructor(  private carService: CarService,
                private messageService: MessageService,
                public dialog: MatDialog
              ) { }

  // material dialog 
  LeadSourceDialogRef: MatDialogRef<LeadSourceComponent>;

  DeleteConfirmationDialogRef: MatDialogRef<DeleteConfirmationComponent>;


  ngOnInit() {
     this.carService.getCarsMedium().then(cars => this.cars = cars);
  }//ngOnInit


    // Forms Popups
      //Lead Source
        AddLeadSource() {
          let LeadSourceDialogRef = this.dialog.open(LeadSourceComponent, { width:'50%', data: { Header:'Lead Source Creat Form', type:'Add' } });
          LeadSourceDialogRef.afterClosed().subscribe(result => console.log(result));
        }
        EditLeadSource(car: Car) {
          let LeadSourceDialogRef = this.dialog.open(LeadSourceComponent, { width:'50%', data: { Header:'Lead Source Edit Form', type:'Edit', value:car } });
          LeadSourceDialogRef.afterClosed().subscribe(result => console.log(result));
        }
        ViewLeadSource(car: Car) {
          let LeadSourceDialogRef = this.dialog.open(LeadSourceComponent, { width:'50%', data: { Header:'Lead Source View', type:'View', value:car } });
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
