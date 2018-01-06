import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CrmSettingsService {

    constructor(private http: HttpClient) { }

    addAccountType(data){
        return this.http.post("http://localhost:3000/accountTypeAdd", data).map(res => res);
    }

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