import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-contact-form',
  templateUrl: `contact-form.component.html`,
  styleUrls:['contact-form.component.css'],
})
export class ContactFormComponent { 
  userForm = new FormGroup({

  	fullName: new FormGroup({

  		firstName: new FormControl(),
    	lastName: new FormControl(),

  	}),

    	email: new FormControl(),
    	message: new FormControl(),

  });
  onSubmit(){
    console.log(this.userForm.value);
  }
}


