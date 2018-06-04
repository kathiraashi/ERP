import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = 'http://localhost:4000';

@Injectable()
export class CrmSettingsService {

    constructor( private http: Http ) {  }


        private handleError (error: Response | any) {
            console.error('ApiService::handleError', error);
            return Observable.throw(error);
        }

      // API: GET
        public getAccountType(): Observable<any[]>  {
            return this.http .get(API_URL + '/getAccountTypes')
            .map(response => { const datas = response.json(); return datas; })
            .catch(this.handleError);
        }

    // API: POST
        public addAccountType(data: any) {
            return this.http .post(API_URL + '/accountTypeAdd' , data)
            .map(response => { const datas = response.json(); return datas; })
            .catch(this.handleError);
        }

    // API: GET By Id
        public findAccountType(Id: any) {
            return this.http .get(API_URL + '/findAccountType/' + Id)
            .map(response => { const datas = response.json(); return datas; })
            .catch(this.handleError);
        }

    // API: PUT By Id
        public updateAccountType(data: any) {
            return this.http .put(API_URL + '/updateAccountType/' + data._id, data)
            .map(response => { const datas = response.json(); return datas; })
            .catch(this.handleError);
        }

    // API: DELETE Buy Id
        public deleteAccountType(Id: any) {
            return this.http .delete(API_URL + '/deleteAccountType/' + Id)
            .map(response => { const datas = response.json(); return datas; })
            .catch(this.handleError);
        }

}
