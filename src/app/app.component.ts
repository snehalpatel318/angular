import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showForm =true;

  constructor(private fb:FormBuilder){}

  form:FormGroup = this.fb.group({
    name:[],
    email:[],
    city:[],
    contacts:this.fb.array([
      this.fb.group({
        number:[],
        type:[],
        description:[]
      })
    ])
  });
  
  get contacts(){
    return this.form.get('contacts') as FormArray;
  }

  addContact(){
    this.contacts.push(this.fb.group({
      number:[],
      type:[],
      description:[]
    }))
  }

  deleteContact(i:number){
    this.contacts.removeAt(i)
  }

  submitContact(){
    alert(JSON.stringify(this.form.value,null,2))
  }
}
