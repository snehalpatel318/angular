import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(@Inject(DOCUMENT) private document:Document) { }

  swithTheme(theme:string){
    let themeLink =this.document.getElementById('app-theme') as HTMLLinkElement;
    if(themeLink){
      themeLink.href =  theme +  '.css';
    }
  }
}
