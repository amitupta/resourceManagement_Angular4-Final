import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GetuserService {

  constructor(private http:Http) { }
  getAlluser()
  {
    const header=new Headers();
    header.append('content-Type','application/json');
    return this.http.get('http://localhost:8082/getAllEmp')
    .map(res=>res.json());
  }
}
