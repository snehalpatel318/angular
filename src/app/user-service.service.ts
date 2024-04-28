import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  getData(): Observable<Data[]>{
    let url = "https://jsonplaceholder.typicode.com/todos";
    return this.http.get<Data[]>(url);
  }
}
