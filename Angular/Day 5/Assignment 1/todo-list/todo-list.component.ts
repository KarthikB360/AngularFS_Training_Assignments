import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { ToDo } from '../model/ToDo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnChanges {
  toDoList: ToDo[] = [];

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.toDoList = this._dataService.getAllToDoList();
  }

  removeToDoEntry(todo: ToDo) {
    let observableObj = new Observable((subscriber) => {
      this._dataService.removeToDoEntryById(todo.toDoId);
    });
    observableObj.subscribe();
  }

  updateToDoEntry(todo: ToDo) {
    this._dataService.updateToDoEntryById(todo);
  }

  onCheckboxClick(toDo: ToDo) {
    toDo.isCheck = !toDo.isCheck;
    this._dataService.updateToDoEntryById(toDo);
  }

  deleteSelectedTasks() {
    this._dataService.removeSelectedEntries();
    this.toDoList = this._dataService.getAllToDoList();
  }

  deleteAllTasks() {
    this._dataService.removeAllEntries();
    this.toDoList = this._dataService.getAllToDoList();
  }

  onEditClick(toDo: ToDo, str: string) {
    if (toDo.isEdit) {
      toDo.todoText = str;
    } else{
      toDo.isCheck = false;
    }
    toDo.isEdit = !toDo.isEdit;
    this._dataService.updateToDoEntryById(toDo);
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
