
import { Component, OnInit } from '@angular/core';
import { LoginService } from '@core/index';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Login: LoginService) { }

  ngOnInit() {
  }

}
