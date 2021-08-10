import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpParams, HttpClient,HttpHeaders   } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { from } from 'rxjs';

export interface grpData {
    grpId:number;
    grpName:string;
 }

@Injectable()
export class sharedservice {
    sharingData: grpData={grpId:0, grpName:""};

    saveData(id, str){
        this.sharingData.grpId=id; 
        this.sharingData.grpName=str; 
    }
    getGrpName(){
        return this.sharingData.grpName;
    }
    getGrpID(){
        return this.sharingData.grpId;
    }
}