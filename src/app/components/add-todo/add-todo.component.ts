import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Todo} from '../../Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  item: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const todo = {
      sno: 1,
      "title": this.item,
      active: false
    }
    this.addTodo.emit(todo);
    this.item = "";
  }

}
