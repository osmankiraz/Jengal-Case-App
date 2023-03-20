import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  set(key: string, value: ITodo) {
    let values = this.get(key);
    if (!values) values = [];
    values.push(value);
    localStorage.setItem(key, JSON.stringify(values));
  }

  get(key: string): ITodo[] {
    return JSON.parse(localStorage.getItem(key)!);
  }
}
