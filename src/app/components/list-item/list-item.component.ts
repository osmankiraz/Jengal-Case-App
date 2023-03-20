import { StorageService } from 'src/app/services/storage.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'Jengal-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() item: ITodo;
  @Output() refresh = new EventEmitter<any>();

  constructor(private storageService: StorageService) {}

  changeComplete(id: string) {
    const todos = this.storageService.get(environment.todos_storage_key);
    const _todoIndex = todos.findIndex((t) => t.id == id);

    if (_todoIndex >= 0) {
      todos[_todoIndex].completed = !todos[_todoIndex].completed;
      this.storageService.changeTodo(environment.todos_storage_key, todos);
      this.item.completed = !this.item.completed;
    }
  }
  deleteTodo(id: string) {
    const todos = this.storageService.get(environment.todos_storage_key);
    const _todoIndex = todos.findIndex((t) => t.id == id);

    if (_todoIndex >= 0) {
      todos.splice(_todoIndex, 1);
      this.storageService.changeTodo(environment.todos_storage_key, todos);
      this.refresh.emit();
    }
  }
}
