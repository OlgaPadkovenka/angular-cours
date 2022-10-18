import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.formBuilder.group({
    login: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(10)])
  })

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
  }
  onRegister(): void {
    const registerUser = this.registerForm.value;
    console.dir(registerUser);
    this.router.navigate(['login']);
  }
}
