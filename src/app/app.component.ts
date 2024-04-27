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
  currentVal = ''
  disbleBox= true

  getfunctionName(){   // function use
    alert(this.name);
  }
  getName(name:string){   // function use with variable
    alert(name);
  }
  myEvent(evt:string){
    console.warn(evt)
  }
  getVal(val:string){
    this.currentVal = val;
  }
  enableBox(){
    this.disbleBox = false
  }
  
}
