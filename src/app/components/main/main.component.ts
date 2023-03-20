import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'Jengal-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  todos: ITodo[];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.todos = this.storageService.get(environment.todos_storage_key);
  }
}
