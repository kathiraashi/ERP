// default modules
import { Component, OnInit, TemplateRef  } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

//Feture Modules
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

//custome Modules
import { Car} from '../../domain/car';
import { CarService} from '../../service/carservice';

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
noRows;
selectedCar: Car;
dialogVisible: boolean;
msgs: Message[] = [];


//modal 
modalRef: BsModalRef;

//form
LeadSourceAddForm: FormGroup;
LeadSourceEditForm: FormGroup;
vin;

constructor(  private formBuilder: FormBuilder,
              private modalService: BsModalService,
              private carService: CarService,
              private messageService: MessageService 
            ) {
               this.createForm();
               this.noRows = '10';
              } //constructor

ngOnInit() {
   this.carService.getCarsMedium().then(cars => this.cars = cars);
}//ngOnInit

EditCar(car: Car) {
  this.vin = car.vin;
}//EditCar

ViewCar(car: Car) {
  this.msgs = [];
  this.msgs.push({severity:'info', summary:'Car Select', detail:'Vin: ' + car.vin});
}//ViewCar

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
}

confirmDelete(): void {
  this.modalRef.hide();
  this.msgs = [];
  this.msgs.push({severity:'success', summary:'Alert Message', detail:'Deleted'});
}

declineDelete(): void {
  this.modalRef.hide();
  this.msgs = [];
  this.msgs.push({severity:'warn', summary:'Alert Message', detail:'Declined'});
}


handleChange(e) {
  // console.log(e.index);
  // console.log(e.originalEvent.target.innerText);
}


createForm(){

  this.LeadSourceAddForm = this.formBuilder.group({ leadSource: ['', Validators.compose([ Validators.required ])] });
  this.LeadSourceEditForm= this.formBuilder.group({ leadSource: ['', Validators.compose([ Validators.required ])] });

};//createForm


}
