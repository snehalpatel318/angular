import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';

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
  testname =""

  getName(){   // function use
    return this.name;
  }
  constructor(private user:UserDataService){
    console.log(this.user.getData())
    let data = this.user.getData();
    this.testname = data.name
  }
  
}
