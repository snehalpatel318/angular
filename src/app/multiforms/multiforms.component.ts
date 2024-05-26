import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiforms',
  templateUrl: './multiforms.component.html',
  styleUrls: ['./multiforms.component.css']
})
export class MultiformsComponent implements OnInit {

  constructor(private builder:FormBuilder){

  }
  isLinear = true;
  valuesDoNotMatch = false;
  ngOnInit(): void {
    
  }

  Empregister= this.builder.group({
    basic:this.builder.group({
      firstname:this.builder.control('',Validators.required),
      lastname:this.builder.control('',Validators.required),
      password:this.builder.control(''),
      confirmpassword:this.builder.control('')
      },{
        Validators:this.controlValuesAreEqual('password','confirmpassword')
    }),
    contact:this.builder.group({
      email:this.builder.control('',Validators.required),
      phone:this.builder.control('',Validators.required),
      fax:this.builder.control('',Validators.required),
    }),
    address:this.builder.group({
      street:this.builder.control('',Validators.required),
      city:this.builder.control('',Validators.required),
      pincode:this.builder.control('',Validators.required),
    })
  });

  private controlValuesAreEqual(controlNameA:string, controlNameB:string):ValidatorFn{
    return (control: AbstractControl):ValidationErrors | null => {
      const formGroup = control as FormGroup
      const valueofcontrolA = formGroup.get(controlNameA)?.value
      const valueofcontrolB = formGroup.get(controlNameB)?.value

      if(valueofcontrolA === valueofcontrolB){
        return null
      }else{
        return { valuesDoNotMatch: true}
      }
    }
  }

  get BasicinfoForm(){
    return this.Empregister.get("basic") as FormGroup;
  }
  get contactForm(){
    return this.Empregister.get("contact") as FormGroup;
  }
  get addressForm(){
    return this.Empregister.get("address") as FormGroup;
  }

  HandleSubmit(){
    if(this.Empregister.valid){
      console.log(this.Empregister.value)
    }
  }
}
