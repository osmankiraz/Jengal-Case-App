import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';
import { Guid } from "guid-typescript";

@Component({
  selector: 'Jengal-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent {
  @Input() todos: ITodo[];
  @Output() todosChange = new EventEmitter<ITodo[]>();

  /**
   * Inputun placeholder bilgisi parent component üzerinden alınır.
   */
  @Input() placeholder: string = '';

  entryText: string;

  constructor(private storageService: StorageService) {}

  addTodo() {
    const todo: ITodo = {
      id:Guid.create().toString(),
      completed: false,
      value: this.entryText,
    };
    this.storageService.newTodo(environment.todos_storage_key, todo);
    this.entryText = '';
    this.todos = this.storageService.get(environment.todos_storage_key);
    this.todosChange.emit(this.todos)
  }
}
