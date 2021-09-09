import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../../Todos';

@Component({
  selector: 'app-my-todos',
  templateUrl: './my-todos.component.html',
  styleUrls: ['./my-todos.component.css']
})
export class MyTodosComponent implements OnInit {

  @Input() todo: Todo | undefined;
  // title = 'Todo App';

  todos: Todo[];

  constructor(){
    this.todos = [];
  }

  ngOnInit(): void {
    if(localStorage.todos){
      this.todos = JSON.parse(localStorage.todos);
    }
  }

  todoAdd(todo: any): void{
    this.todos.push(todo);
    localStorage.todos = JSON.stringify(this.todos);
  }

  markIt(todo: any): void{
    this.todos[this.todos.indexOf(todo)].active = !todo.active;
    localStorage.todos = JSON.stringify(this.todos);
  }

  deleteIt(todo: Todo): void{
    this.todos.splice(this.todos.indexOf(todo), 1);
    localStorage.todos = JSON.stringify(this.todos);
  }

}
