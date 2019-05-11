import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private LoginService: LoginService) { }

  ngOnInit() {
  }

  login(form) {
    console.log(form,'sfsdfsdgsgsd')
    this.LoginService.login(form.value).subscribe((res) => {
      console.log(res,res)
    });
  }
}
