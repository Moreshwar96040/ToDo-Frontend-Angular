import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(message:String) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient:HttpClient) { }

  executeHelloWorldBeanService(){
    return this.httpClient.get<HelloWorldBean>("http://localhost:8080/hello-world-bean")
  }

  executeHelloWorldBeanServiceWithPathVariable(name:String){
    let basicAuthHeaderString=this.createBasicAuthHeader();
    let headers= new HttpHeaders({Authorization:basicAuthHeaderString})
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`
    ,{headers})
  }

  createBasicAuthHeader(){
    let userName='user'
    let password='pass'
    let basicAuthHeaderString= 'Basic ' +window.btoa(userName+':'+password)
    return basicAuthHeaderString
  }

}



