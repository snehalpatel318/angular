import { Injectable } from '@angular/core';
import { dataType } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getData(){
    const data:dataType ={
      name:'snehal',
      id:1642,
      indian:true,
    }
    return data
  }
}
