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
  show = 'false';
  showif = 'yes'
  showColor = 'red'
  color="red"
  data = ['snehal','shardul','heer']

  multidata = [
    {
      name:'Snehal',
      age:25,
      email:"xyz@gmail.com"
    },
    {
      name:'Shardul',
      age:28,
      email:"xyz@gmail.com"
    },
    {
      name:'Heer',
      age:1
    }
  ]

  getName(){   // function use
    return this.name;
  }

  
}
