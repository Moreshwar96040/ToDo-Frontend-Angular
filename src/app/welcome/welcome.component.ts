import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message='global mesage'
  name=''
  welcomeMessgaeFromService:String=''

  constructor(private route :ActivatedRoute,
    private welcomeDataService:WelcomeDataService) {
   }
  ngOnInit() {
    console.log(this.message);
    console.log(this.route.snapshot.params['name']);
    this.name=this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    // this.welcomeDataService.executeHelloWorldBeanService().subscribe(
    //   response=>this.handleSuccessfulResponse(response),
    //   error =>this.handleErrorResponse(error)
    // )
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response),
      error =>this.handleErrorResponse(error)
    )
    console.log("last line of getWelcomeMessage()")

  }

  handleSuccessfulResponse(response:any){
    this.welcomeMessgaeFromService=response.message
  }

  handleErrorResponse(error:any){
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessgaeFromService=error.error.message
  }

}
