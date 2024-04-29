import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

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

  getName(){   // function use
    return this.name;
  }

  constructor(private viewContainer:ViewContainerRef,
    private cfr:ComponentFactoryResolver){

  }

  async loadAdmin(){
    this.viewContainer.clear()
    const {ListComponent} =await import('./admin/list/list.component')
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(ListComponent))
  }

  async loadUser(){
    this.viewContainer.clear()
    const {ListComponent} =await import('./user/list/list.component')
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(ListComponent))
  }

}
