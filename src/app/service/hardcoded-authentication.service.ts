import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(userName:string,password:string){
    if('Moreshwar'===userName && 'pass'===password){
      sessionStorage.setItem("autenticatedUser",userName);
      return true
    }else{
      sessionStorage.removeItem("autenticatedUser");
    }
    return false
  }

  isVaildUser(){
    if(null!=sessionStorage.getItem("autenticatedUser")){
      return true
    }
    return false
  }

  logout(){
    sessionStorage.removeItem("autenticatedUser");
  }
}
