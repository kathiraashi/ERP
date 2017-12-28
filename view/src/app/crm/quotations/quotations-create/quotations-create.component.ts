import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-quotations-create',
  templateUrl: './quotations-create.component.html',
  styleUrls: ['./quotations-create.component.css']
})
export class QuotationsCreateComponent implements OnInit {

  Steps: MenuItem[];
  activeIndex: number = 0;

  constructor() { }

  ngOnInit() {

      this.Steps = [{
            label: 'Basic',
            command: (event: any) => {  console.log(event); this.activeIndex = 0; }
        },
        {
            label: 'Products',
            command: (event: any) => { this.activeIndex = 1;  }
        },
        {
            label: 'Terms',
            command: (event: any) => { this.activeIndex = 2; }
        }
      ];
  }

}
