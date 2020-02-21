import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public categories = ['Bakery', 'Drinks', 'Desserts']

  public userModel = new User('', 'mark@gmail.com', '', '', 'female', false)
    
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(form){
    console.log(form);
  }

}
