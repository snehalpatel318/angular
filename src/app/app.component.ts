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

  users = [
    {
      name:'Snehal',
      age:25,
      address:'Himatnagar'
    },
    {
      name:'Shardul',
      age:28,
      address:'Himatnagar'
    },
    {
      name:'Heer',
      age:1,
      address:'Himatnagar'
    },
  ] 

  getName(){   // function use
    return this.name;
  }

  
}
