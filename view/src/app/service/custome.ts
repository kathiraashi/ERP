import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomService {

    constructor(private http: HttpClient) { }

    getProductCustom() {
      return this.http.get<any>('assets/showcase/data/products.json')
        .toPromise()
        .then(res => <any[]>res.data)
        .then(data => { return data; });
    }
    getTaxCustom() {
      return this.http.get<any>('assets/showcase/data/tax.json')
        .toPromise()
        .then(res => <any[]>res.data)
        .then(data => { return data; });
    }
    getQuotationCustom() {
      return this.http.get<any>('assets/showcase/data/quotation.json')
        .toPromise()
        .then(res => <any[]>res.data)
        .then(data => { return data; });
    }
}