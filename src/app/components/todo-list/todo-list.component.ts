import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() _todos: Todo[] | undefined;
  @Output() makeComplete: EventEmitter<Todo> = new EventEmitter();
  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  ngOnInit(): void {
  }

  onComplete(todo: Todo): void{
    this.makeComplete.emit(todo);
  }

  onDelete(todo: Todo): void{
    this.delete.emit(todo);
  }
  

}
