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
import { EmployeeCategoryComponent } from '../../popups/settings/hr-settings/employee-category/employee-category.component';
import { DepartmentComponent } from '../../popups/settings/hr-settings/department/department.component';
import { DesignationComponent } from '../../popups/settings/hr-settings/designation/designation.component';

import { DeleteConfirmationComponent } from '../../popups/others/delete-confirmation/delete-confirmation.component';


@Component({
  selector: 'app-hr-settings',
  templateUrl: './hr-settings.component.html',
  styleUrls: ['./hr-settings.component.css'],
  providers: [ MessageService ]
})
export class HrSettingsComponent implements OnInit {

  // datatable primng
  cars: Car[];
  cols: any[];
  msgs: Message[] = [];

  constructor(  public dialog: MatDialog,
                private carService: CarService,
                private messageService: MessageService 
               ) { }


// material dialog 
    EmployeeCategoryDialogRef: MatDialogRef<EmployeeCategoryComponent>;
    DepartmentDialogRef: MatDialogRef<DepartmentComponent>;
    DesignationDialogRef: MatDialogRef<DesignationComponent>;


    DeleteConfirmationDialogRef: MatDialogRef<DeleteConfirmationComponent>;


  ngOnInit() {
     this.carService.getCarsMedium().then(cars => this.cars = cars);
  }//ngOnInit


    // Forms Popups
      //Employee Category
      AddEmployeeCategory() {
        let EmployeeCategoryDialogRef = this.dialog.open(EmployeeCategoryComponent, { width:'60%', data: { Header:'Employee Category Creat Form', type:'Add' } });
        EmployeeCategoryDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      EditEmployeeCategory(car: Car) {
        let EmployeeCategoryDialogRef = this.dialog.open(EmployeeCategoryComponent, { width:'60%', data: { Header:'Employee Category Edit Form', type:'Edit', value:car } });
        EmployeeCategoryDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      ViewEmployeeCategory(car: Car) {
        let EmployeeCategoryDialogRef = this.dialog.open(EmployeeCategoryComponent, { width:'60%', data: { Header:'Employee Category View', type:'View', value:car } });
      }

    //Department
      AddDepartment() {
        let DepartmentDialogRef = this.dialog.open(DepartmentComponent, { width:'60%', data: { Header:'Department Creat Form', type:'Add' } });
        DepartmentDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      EditDepartment(car: Car) {
        let DepartmentDialogRef = this.dialog.open(DepartmentComponent, { width:'60%', data: { Header:'Department Edit Form', type:'Edit', value:car } });
        DepartmentDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      ViewDepartment(car: Car) {
        let DepartmentDialogRef = this.dialog.open(DepartmentComponent, { width:'60%', data: { Header:'Department View', type:'View', value:car } });
      }
    //Designation
      AddDesignation() {
        let DesignationDialogRef = this.dialog.open(DesignationComponent, { width:'60%', data: { Header:'Designation Creat Form', type:'Add' } });
        DesignationDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      EditDesignation(car: Car) {
        let DesignationDialogRef = this.dialog.open(DesignationComponent, { width:'60%', data: { Header:'Designation Edit Form', type:'Edit', value:car } });
        DesignationDialogRef.afterClosed().subscribe(result => console.log(result));
      }
      ViewDesignation(car: Car) {
        let DesignationDialogRef = this.dialog.open(DesignationComponent, { width:'60%', data: { Header:'Designation View', type:'View', value:car } });
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
