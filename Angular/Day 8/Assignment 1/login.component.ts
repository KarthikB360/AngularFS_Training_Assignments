import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";

  password:string = "";

  auth:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.username === 'admin' && this.password === 'admin'){
      this.auth = true;
      this.clear();
    } else {
      this.auth = false;
      this.clear();
    }
  }

  clear(){
    this.username="";
      this.password="";
  }

}
