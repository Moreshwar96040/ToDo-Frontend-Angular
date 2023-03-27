import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName='Moreshwar'
  password='pass'
  invalidLogin=false
  errorMessage='Invalid credentials'
  constructor(private router:Router,private hardcodedAuthenticationService:HardcodedAuthenticationService) {
  }
  
  ngOnInit() {
  }

  handleLogin(){
    console.log(this.userName);
    if(this.hardcodedAuthenticationService.authenticate(this.userName,this.password)){
      this.router.navigate(['welcome',this.userName]);
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true;
    }
  }
}
