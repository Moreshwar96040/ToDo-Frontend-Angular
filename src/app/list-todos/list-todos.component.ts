import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';



export class ToDO {
  constructor(
    public id:Number,
    public description:String,
    public done:boolean,
    public targetDate:Date
  ) { }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {
// todos=[
//   new ToDO(1,'Learn Spring Boot',false,new Date),
//   new ToDO(1,'Learn Angular',false,new Date),
// ]
 todos:any;
  // todo = {
  //   id:1,
  //   description:'Learn Agular'
  // }
  deleteMessage:String="";
  constructor(private todoDataService:TodoDataService,
    private router:Router
    ) { }

  ngOnInit() {
    this.refreshTodos()
  }

  deleteTodo(id:String){
    this.todoDataService.deleteTodo("Moreshwar",id).subscribe(
      response=>{
        this.deleteMessage=`todo for id ${id} deleted successfully`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id:number){
    console.log("updating todo");
    this.router.navigate(["todos",id])
  }

  addTodo(){
    this.router.navigate(["todos",-1])
  }

  refreshTodos(){
    this.todoDataService.retrieveAllTodos("Moreshwar").subscribe(
      response=>{
        console.log(response)
        this.todos=response
      }
    )
  }

}
function constructor() {
  throw new Error('Function not implemented.');
}


