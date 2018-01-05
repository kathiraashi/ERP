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
import { LeaveTypeComponent } from '../../popups/settings/hrms-settings/leave-type/leave-type.component';
import { ExpensesTypeComponent } from '../../popups/settings/hrms-settings/expenses-type/expenses-type.component';

import { DeleteConfirmationComponent } from '../../popups/others/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-hrms-settings',
  templateUrl: './hrms-settings.component.html',
  styleUrls: ['./hrms-settings.component.css'],
  providers: [ MessageService ]
})
export class HrmsSettingsComponent implements OnInit {

  // datatable primng
  cars: Car[];
  cols: any[];
  msgs: Message[] = [];


  constructor(  public dialog: MatDialog,
                private carService: CarService,
                private messageService: MessageService 
              ) { }


// material dialog 
    LeaveTypeDialogRef: MatDialogRef<LeaveTypeComponent>;
    ExpensesTypeDialogRef: MatDialogRef<ExpensesTypeComponent>;

    DeleteConfirmationDialogRef: MatDialogRef<DeleteConfirmationComponent>;


  ngOnInit() {
     this.carService.getCarsMedium().then(cars => this.cars = cars);
  }//ngOnInit


    // Forms Popups
      //Leave Type
      AddLeaveType() {
        let LeaveTypeDialogRef = this.dialog.open(LeaveTypeComponent, { width:'60%', data: { Header:'Leave Type Creat Form', type:'Add' } });
        LeaveTypeDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      EditLeaveType(car: Car) {
        let LeaveTypeDialogRef = this.dialog.open(LeaveTypeComponent, { width:'60%', data: { Header:'Leave Type Edit Form', type:'Edit', value:car } });
        LeaveTypeDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      ViewLeaveType(car: Car) {
        let LeaveTypeDialogRef = this.dialog.open(LeaveTypeComponent, { width:'60%', data: { Header:'Leave Type View', type:'View', value:car } });
      }

    //Expenses Type
      AddExpensesType() {
        let ExpensesTypeDialogRef = this.dialog.open(ExpensesTypeComponent, { width:'60%', data: { Header:'Expenses Type Creat Form', type:'Add' } });
        ExpensesTypeDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      EditExpensesType(car: Car) {
        let ExpensesTypeDialogRef = this.dialog.open(ExpensesTypeComponent, { width:'60%', data: { Header:'Expenses Type Edit Form', type:'Edit', value:car } });
        ExpensesTypeDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      ViewExpensesType(car: Car) {
        let ExpensesTypeDialogRef = this.dialog.open(ExpensesTypeComponent, { width:'60%', data: { Header:'Expenses Type View', type:'View', value:car } });
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
