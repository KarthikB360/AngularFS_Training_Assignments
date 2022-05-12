import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    if(this.loginForm.value.userName === "admin@gmail.com" && this.loginForm.value.password === "admin"){
      alert("Authenticated");
    }else{
      alert("Not authenticated, please try again.")
    }
  }
}
