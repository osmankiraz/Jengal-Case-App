import { StorageService } from 'src/app/services/storage.service';
import { Component, Input } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';

@Component({
  selector: 'Jengal-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() item: ITodo;

  constructor(private storageService: StorageService) {}

  changeComplete() {}
}
