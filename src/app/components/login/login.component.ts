import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    name : new FormControl('mark'),
    email: new FormControl('m@gmail.com'),
    password: new FormControl('111')
  })


  constructor() { }

  ngOnInit(): void {
  }

}
