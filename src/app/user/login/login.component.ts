import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/marketplace/model/nfts.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userLogin: UserLogin = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {

    console.log('user connected : ' + this.userLogin.email + ' / ' + this.userLogin.password);
    this.router.navigate(['/']);
    
  }
}
