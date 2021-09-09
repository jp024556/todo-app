import { Component, Input } from '@angular/core';
import {Todo} from './Todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';


  constructor(){
  }

  ngOnInit(): void {

  }
}
