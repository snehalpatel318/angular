import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translatService:TranslateService){
    const userLang = navigator.language || 'en';
    const languageCode =userLang.split('-')[0];
    this.translatService.setDefaultLang(languageCode);
    this.translatService.use(languageCode);
  }

  getName(){   // function use
    return this.name;
  }

  
}
