import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconPrefixType, IconSizeType } from 'src/app/types/icon.type';

@Component({
  selector: 'Jengal-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  /**
   * Font awesome icon isimlerinin başındaki prefixtir.
   */
  @Input() prefix:IconPrefixType="fa fa-"

  /**
   * Iconun boyutunu saklar.Default değeri yoktur.'fa-lg' değeri iconu %33 büyültür.
   */
  @Input() size:IconSizeType=""

  /**
   * Iconun isim değeridir.Girilmesi zorunludur.
   */
  @Input() name:string;

  @Input() color:string

  @Output() callback=new EventEmitter<any>()

  ngOnInit(): void {
    this.size=(" "+this.size) as IconSizeType
  }

  onClick(){
    this.callback.emit();
  }
}
