import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formUser: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    user: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  get form() {
    return this.formUser.controls;
  }
}
