import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpParams, HttpClient, HttpHeaders   } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { from } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class BatchImportService {

    constructor(private http: HttpClient) { }
    public batchImportAsset(data:any) {
      let uploadURL = `${environment.apiUrl}/api/allergan/stp/v4/admin/batchImportAssets`;
      return this.http.post<any>(uploadURL, data );
    }
    public batchImportUser(data:any) {
      let uploadURL = `${environment.apiUrl}/api/allergan/stp/v4/admin/batchImportUser`;
      return this.http.post<any>(uploadURL, data );
    }
    public batchImportQuestion(data:any) {
      let uploadURL = `${environment.apiUrl}/api/allergan/stp/v4/admin/batchImportQuestion`;
      return this.http.post<any>(uploadURL, data );
    }
    openTemplate(templateName:string):any{
      let url=`${environment.apiUrl}/api/allergan/stp/v4/admin/batchImportAssets/openTemplate?templateName=`+templateName;
      return this.http.get(url,  { responseType: 'blob' });
     
    }
}
 