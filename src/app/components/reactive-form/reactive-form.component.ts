import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { 
    
  }


  userForm = this.fb.group({
    // name: [null],
    // email: [null],
    // address: this.fb.group({
    //   house: [null],
    //   city: [null],
    //   country: [null]
    // })

    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    email: [null, Validators.required],
    phone: [null, [Validators.required, Validators.pattern('^\\d{10}$')]]
  })

  onSubmit(data){
    console.log(data)
  }


  // userForm = new FormGroup({
  //   name: new FormControl(),
  //   email: new FormControl(),
  //   address: new FormGroup({
  //     house: new FormControl(),
  //     city: new FormControl(),
  //     country: new FormControl()
  //   })
  // })






  loadData(){
    // this.userForm.setValue({
    //   name: 'Mark2',
    //   address: {
    //     house: 'house1',
    //     city: 'city 1',
    //     country: 'countrty 1'
    //   }
    
    // })
    this.userForm.patchValue({
      name: 'Mark2',
      address: {
        house: 'house1',
        city: 'city 1',
        country: 'countrty 1'
      }
    
    })
  }

 

  ngOnInit(): void {
  }

}
