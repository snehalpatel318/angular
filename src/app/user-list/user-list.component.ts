import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public getJsonValue:any;
  public postJsonValue:any;
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.getMethod();
    this.postMethod();
  }

  getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data)=>{
      console.log(data)
      this.getJsonValue = data;
    });
  }

  postMethod(){
    const header = new HttpHeaders({
      contentType:'application/json'
    })
    let body = {
      title: 'test',
    body: 'test',
    userId: 1,
    }
    this.http.post('https://jsonplaceholder.typicode.com/posts',body,{headers:header}).subscribe((data)=>{
      console.log(data)
      this.postJsonValue = data;
    })
  }
}
