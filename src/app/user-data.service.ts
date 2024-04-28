import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getData(){
    return{
      name:'snehal',
      age:'28',
      id:1642
    }
  }
}
