import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDO } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient:HttpClient) { }

  retrieveAllTodos(name:String){
    return this.httpClient.get<ToDO[]>(`http://localhost:8080/users/${name}/todos`)
  }

  deleteTodo(name:String,id:String){
    return this.httpClient.delete(`http://localhost:8080/users/${name}/todos/${id}`)
  }

  retrieveTodo(name:String,id:String){
    return this.httpClient.get<ToDO>(`http://localhost:8080/users/${name}/todos/${id}`)
  }

  updateTodo(name:String,id:String,todo:ToDO){
    return this.httpClient.put(`http://localhost:8080/users/${name}/todos/${id}`,todo)
  }

  addTodo(name:String,todo:ToDO){
    return this.httpClient.post(`http://localhost:8080/users/${name}/todos`,todo)
  }


}
