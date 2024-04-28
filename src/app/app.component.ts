import { Component } from '@angular/core';
import { dataType } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name = "Snehal Patel"; // variable
  obj = {name:'Snehal',age:20} // object 
  arr = ['SnehalPAtel','Shardul','Heer'] // array

  getName(){   // function use
    return this.name;
  }
  getData(){
    const data:dataType ={
      name:'snehal',
      id:1642,
      indian:true,
    }
    return data
  }
  
}
