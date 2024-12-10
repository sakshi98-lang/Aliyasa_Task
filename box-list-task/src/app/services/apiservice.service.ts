import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private apiUrl = 'http://localhost:3000/';


  constructor(private http: HttpClient) { }


  getRequest(url:any){
    return this.http.get(this.apiUrl + url);
  }

  postRequest(url:any,data:any){
    return this.http.post(this.apiUrl + url, data);
  }

}
