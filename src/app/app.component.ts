import { Todo } from './../models/todo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: Todo[] = [];
  public title: String = "My To-do's";

  constructor() {
    this.todos.push(new Todo(1, 'study', false));
    this.todos.push(new Todo(2, 'work', false));
    this.todos.push(new Todo(3, 'play', false));

  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  markAsDone() {

  }



}


