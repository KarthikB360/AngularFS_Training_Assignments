import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToDo } from '../model/ToDo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent implements OnInit {
  value: string = '';

  constructor(private _dataservice: DataService) {}

  ngOnInit(): void {}

  onSubmit() {
    let count: number = this._dataservice.getCountOfToDoList();
    let toDoObj: ToDo = {
      toDoId: count + 1,
      todoText: this.value,
      isCheck: false,
      isEdit: false
    };
    this._dataservice.addToDoEntry(toDoObj);
  }
}
