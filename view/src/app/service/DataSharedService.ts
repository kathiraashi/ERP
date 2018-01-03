import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'

// Name Service
export interface myData { id:string; }
export interface ReturnPageData { returnPage:string; }


@Injectable()
export class DataSharedService {

  sharingData: myData={id:""};
  saveData(str){ this.sharingData.id = str; }
  getData(){ return this.sharingData.id; }


  PageReturnData: ReturnPageData = {returnPage :""};
  SetreturnPage(str){ this.PageReturnData.returnPage = str; }
  GetreturnPage(){ return this.PageReturnData.returnPage; }

  

} 
