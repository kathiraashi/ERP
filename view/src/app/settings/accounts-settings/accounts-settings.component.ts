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
import { TaxComponent } from '../../popups/settings/account-settings/tax/tax.component';
import { BankComponent } from '../../popups/settings/account-settings//bank/bank.component';
import { IncomeTypeComponent } from '../../popups/settings/account-settings/income-type/income-type.component';
import { PaymentTermsComponent } from '../../popups/settings/account-settings/payment-terms/payment-terms.component'

import { DeleteConfirmationComponent } from '../../popups/others/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-accounts-settings',
  templateUrl: './accounts-settings.component.html',
  styleUrls: ['./accounts-settings.component.css'],
  providers: [ MessageService ]
})
export class AccountsSettingsComponent implements OnInit {


  // datatable primng
  cars: Car[];
  cols: any[];
  msgs: Message[] = [];


  constructor(  public dialog: MatDialog,
                private carService: CarService,
                private messageService: MessageService 
              ) { } 
  ngOnInit() {
     this.carService.getCarsMedium().then(cars => this.cars = cars);
  }//ngOnInit

  // material dialog 
    TaxDialogRef: MatDialogRef<TaxComponent>;
    BankDialogRef: MatDialogRef<BankComponent>;
    IncomeTypeDialogRef: MatDialogRef<IncomeTypeComponent>;
    PaymentTermsDialogRef: MatDialogRef<PaymentTermsComponent>;

    DeleteConfirmationDialogRef: MatDialogRef<DeleteConfirmationComponent>;


    // Forms Popups
      //Tax
        AddTax() {
          let TaxDialogRef = this.dialog.open(TaxComponent, { width:'60%', data: { Header:'Tax Creat Form', type:'Add' } });
          TaxDialogRef.afterClosed().subscribe(result => console.log(result));
        }
        EditTax(car: Car) {
          let TaxDialogRef = this.dialog.open(TaxComponent, { width:'60%', data: { Header:'Tax Edit Form', type:'Edit', value:car } });
          TaxDialogRef.afterClosed().subscribe(result => console.log(result));
        }
        ViewTax(car: Car) {
          let TaxDialogRef = this.dialog.open(TaxComponent, { width:'60%', data: { Header:'Tax View', type:'View', value:car } });
        }

      //Bank
        AddBank() {
          let BankDialogRef = this.dialog.open(BankComponent, { width:'60%', data: { Header:'Bank Creat Form', type:'Add' } });
          BankDialogRef.afterClosed().subscribe(result => console.log(result));
        }
        EditBank(car: Car) {
          let BankDialogRef = this.dialog.open(BankComponent, { width:'60%', data: { Header:'Bank Edit Form', type:'Edit', value:car } });
          BankDialogRef.afterClosed().subscribe(result => console.log(result));
        }
        ViewBank(car: Car) {
          let BankDialogRef = this.dialog.open(BankComponent, { width:'60%', data: { Header:'Bank View', type:'View', value:car } });
        }
      
      //Income Type
        AddIncomeType() {
          let IncomeTypeDialogRef = this.dialog.open(IncomeTypeComponent, { width:'60%', data: { Header:'Income Type Creat Form', type:'Add' } });
          IncomeTypeDialogRef.afterClosed().subscribe(result => console.log(result));
        }
        EditIncomeType(car: Car) {
          let IncomeTypeDialogRef = this.dialog.open(IncomeTypeComponent, { width:'60%', data: { Header:'Income Type Edit Form', type:'Edit', value:car } });
          IncomeTypeDialogRef.afterClosed().subscribe(result => console.log(result));
        }
        ViewIncomeType(car: Car) {
          let IncomeTypeDialogRef = this.dialog.open(IncomeTypeComponent, { width:'60%', data: { Header:'Income Type View', type:'View', value:car } });
        }

      //Payment Terms
        AddPaymentTerms() {
          let PaymentTermsDialogRef = this.dialog.open(PaymentTermsComponent, { width:'60%', data: { Header:'Payment Terms Creat Form', type:'Add' } });
          PaymentTermsDialogRef.afterClosed().subscribe(result => console.log(result));
        }
        EditPaymentTerms(car: Car) {
          let PaymentTermsDialogRef = this.dialog.open(PaymentTermsComponent, { width:'60%', data: { Header:'Payment Terms Edit Form', type:'Edit', value:car } });
          PaymentTermsDialogRef.afterClosed().subscribe(result => console.log(result));
        }
        ViewPaymentTerms(car: Car) {
          let PaymentTermsDialogRef = this.dialog.open(PaymentTermsComponent, { width:'60%', data: { Header:'Payment Terms View', type:'View', value:car } });
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
