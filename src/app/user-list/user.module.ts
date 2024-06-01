import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ UserListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[UserListComponent]
})
export class UserModule { }
