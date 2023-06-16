import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  url='http://localhost:8001/api/user';

 

    constructor(private http: HttpClient){ }

    postUser(data:any){

        return this.http.post(this.url,data);

    }

 

}
