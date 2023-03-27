import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDO } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:any
  todo:any

  constructor(
    private todoDataService:TodoDataService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.todo=new ToDO(this.id,"",false,new Date());
    this.id=this.activatedRoute.snapshot.params['id'];
    if(-1!=this.id){
      this.todoDataService.retrieveTodo("Moreshwar",this.id).subscribe(
        data=>{
          this.todo=data
        }
      );
    }
  }

  saveTodo(){
    if(-1==this.id){
      this.todoDataService.addTodo("Moreshwar",this.todo).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(["/todos"])
        }
      );
    }else{
      this.todoDataService.updateTodo("Moreshwar",this.id,this.todo).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(["/todos"])
        }
      );
    }
  }

}
