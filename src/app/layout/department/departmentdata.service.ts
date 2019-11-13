import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import { HttpClient } from '@angular/common/http';

import { AppConstant } from 'src/app/app.constant';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentdataService {
    api_url: string;
    appendpoint: string;
    cpDefaultUrl: string;
    cpDefaultUpdateUrl: string;
    SERVER_URL_ADD: string;
    SERVER_URL: string;
    SERVER_URL_DEPT_DEL: string;

  constructor(private http: HttpClient,private CommonHttpService:CommonHttpService) {
    this.api_url = AppConstant.API_ENDPOINT1;
    this.appendpoint = this.api_url;
    this.SERVER_URL= this.appendpoint+ AppConstant.API_CONFIG.API_URL.SETTINGS.GETDEPARTMENT;
    this.SERVER_URL_ADD= this.appendpoint+ AppConstant.API_CONFIG.API_URL.SETTINGS.INSERTDEPARTMENT;
    this.SERVER_URL_DEPT_DEL= this.appendpoint+ AppConstant.API_CONFIG.API_URL.SETTINGS.DELETEDEPARTMENT;
  }

    public getDepartment() :Observable<any>{
          return this.http.get(this.SERVER_URL);
          }


          public addDepartment(f) {
              console.log(f);
              console.log(JSON.stringify(f));
              let body = JSON.stringify(f);

              //added interceptors
              return this.http.post(this.SERVER_URL_ADD, body);

              }


            public editDepartment(item:any):Promise<any> {
                  console.log(item);

                  return this.CommonHttpService.globalPostService(this.SERVER_URL_ADD,item).then(data=>{
                      return data;
                  });
                  }




              public deleteDepartment(departmentID) {
                  let head = new HttpHeaders().set("Content-Type", "application/json");
                  console.log('how it is getting ID?:' + departmentID);
                  return this.http.post(this.SERVER_URL_DEPT_DEL+departmentID, { headers: head });
                    }
 }
