import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  /**
   * Tek bir todo objesini alır ve todos'a ekler
   */
  newTodo(key: string, value: ITodo) {
    let values = this.get(key);
    if (!values) values = [];
    values.push(value);
    localStorage.setItem(key, JSON.stringify(values));
  }

  /**
   * Todo arrayini local storage'e ekler.
   */
  changeTodo(key:string,value:ITodo[]){
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * İlgili key'in verilerini çeker.
   */
  get(key: string): ITodo[] {
    return JSON.parse(localStorage.getItem(key)!);
  }
}
