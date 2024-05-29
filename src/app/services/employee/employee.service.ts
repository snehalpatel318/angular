import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, EmployeeRequest } from 'src/app/interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'http://localhost:3200';
  constructor(private http:HttpClient) { }

  getEmployees(request: EmployeeRequest):Observable <Employee[]>{
    const { first ,rows,sortField, sortOrder,filter} = request
    const page = (first/rows) +1 ;
    let urlParam =`_page=${page}&_limit=${rows}`;
    if(sortField){
      urlParam += `&_sort=${sortField}&_order=${sortOrder === 1 ? 'asc' : 'desc'}`;
    }
    if(filter && filter.firstName){
      urlParam += `&firstName_like=${filter.firstName}`;
    }
    return this.http.get<Employee[]>(`${this.baseURL}/employees?${urlParam}`)
  }
}
