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
  testname ="";
  color = '';
  currentStyles: Record<string, string> = {};
  canSave =  true;
  isSpecial = true;
  isUnchanged = true;;

  getName(){   // function use
    return this.name;
  }
  constructor(private user:UserDataService){
    console.log(this.user.getData())
    let data = this.user.getData();
    this.testname = data.name
  }
  
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }
}
