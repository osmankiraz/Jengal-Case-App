import { Component, Input } from '@angular/core';

@Component({
  selector: 'Jengal-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {

  /**
   * Inputun placeholder bilgisi parent component üzerinden alınır.
   */
  @Input() placeholder:string=""

}
