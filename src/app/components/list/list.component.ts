import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';

@Component({
  selector: 'Jengal-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() todos: ITodo[];
  @Output() todosChange = new EventEmitter<ITodo[]>();


}
