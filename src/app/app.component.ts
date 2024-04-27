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
  today = Date.now()
  str ="hello angular"
  amount = 10
  phonenumber = 7896587458

  getName(){   // function use
    return this.name;
  }

  
}
