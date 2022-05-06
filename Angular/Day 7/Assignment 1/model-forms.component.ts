import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-forms',
  templateUrl: './model-forms.component.html',
  styleUrls: ['./model-forms.component.css']
})
export class ModelFormsComponent implements OnInit {

  registrationForm:FormGroup = new FormGroup({
    ownerName: new FormControl("",Validators.required),
    contactNumber: new FormControl(0,[Validators.required,Validators.pattern("\\d{10}")]),
    ownerEmail: new FormControl("",[Validators.required, Validators.email]),
    vehicleRegistrationNo: new FormControl("",Validators.pattern("^[A-Z]{2} [0-9]{2} [A-Z]{2} [0-9]{4}$")),
    address:new FormControl("",Validators.required),
    model:new FormControl("",Validators.pattern("[A-za-z0-9 ]{10}")),
    color:new FormControl("",Validators.required),
    year:new FormControl(0,[Validators.min(2012),Validators.max(2022)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  public submit_click():void { 
    console.log(this.registrationForm.value);
  }
}
