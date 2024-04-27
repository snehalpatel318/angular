import { Component } from '@angular/core';

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
  names = "";

  getName(){   // function use
    return this.name;
  }
  parentComponent(data:any){
   // console.warn(data.name)
    this.names  = data.name
  }
  
}
