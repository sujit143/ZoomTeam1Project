import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from 'src/app/app.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    api_url: string;
    appendpoint: string;
    cpDefaultUrl: string;

    SERVER_URL_USER: string;

  constructor(private http: HttpClient) {
  this.api_url = AppConstant.API_ENDPOINT1;
  this.appendpoint = this.api_url;
  this.SERVER_URL_USER= this.appendpoint+ AppConstant.API_CONFIG.API_URL.SETTINGS.GETUSER;

}

public getUsers() :Observable<any>{
    return this.http.get(this.SERVER_URL_USER);
    }

}
