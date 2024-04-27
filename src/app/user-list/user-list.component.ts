import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Output() parentComponent:EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
   this.parentComponent.emit({name:'Snehal',age:25})
  }

  sendData(){
    let item = {name:'Snehal 123',age:25}
    this.parentComponent.emit(item)
  }
}
