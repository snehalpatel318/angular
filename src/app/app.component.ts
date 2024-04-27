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
  color="orange"
  err=false;

  getName(){   // function use
    return this.name;
  }
  getUserValue(value:string){
    console.warn(value);
  }
  updateColor(){
    this.color = 'blue'
  }
}
