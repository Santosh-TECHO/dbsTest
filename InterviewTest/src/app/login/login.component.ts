import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: String;
  password: String;
  isLogin: Boolean;
  constructor(private route: Router) { }
  

  ngOnInit() {
    this.isLogin = false;
    this.userName = 'ABC';
    this.password = '123456';
  }
  public login() {
    console.log('ini');
    if (this.userName === 'ABC' && this.password === '123456') {
      this.route.navigate(['home']);
      // this.isLogin = true;
    } else {
      alert('Invalid login credentials');
    }
  }

}
