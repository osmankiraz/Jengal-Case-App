import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'Jengal-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() todos: ITodo[];
  @Output() todosChange = new EventEmitter<ITodo[]>();

  constructor(private storageService: StorageService) {}

  refresh() {
    this.todos= this.storageService.get(environment.todos_storage_key)
  }
}
