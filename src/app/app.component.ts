import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

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
  data: Data[] = [];

  getName(){   // function use
    return this.name;
  }

  constructor(private user:UserServiceService){
    this.user.getData().subscribe( data=> {
        console.log(data)
        this.data = data
    })
  }
}
