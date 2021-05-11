import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor(
    private http: HttpClient,
  ) { 
    //console.log("informacion service");
  }
  getInformationUser(tipodocuemnto:string,documento:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1pc3RlcmlvX2RlbHVuYUBob3RtYWlsLmNvbSJ9.eApqD2M9sOGe_qJbJpEMYbFaN4z-x5K8t5N2NSiR9Lc',
    });
    return this.http.get('/api/v1/'+tipodocuemnto+'/'+documento+'?',{headers});
  }

  getIPAddress(){
    return this.http.get("https://api.ipify.org/?format=json"); 
  }
}
