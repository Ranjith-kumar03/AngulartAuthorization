import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUserData={'email' :'', 'password':''}

  constructor(private _loginService : AuthService ,private router : Router) { }

  ngOnInit(): void {
  }
  loginUser()
  {
     this._loginService.loginUser(this.loginUserData).subscribe( data => { console.log(data);
                                                                           localStorage.setItem('token',  data.token);
                                                                           this.router.navigate(["/special"])}
     , error => console.log(error))
  }
}
