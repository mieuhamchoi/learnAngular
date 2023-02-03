import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  //public name:string = 'Tèo'
  @Input() name:string = ''
  @Output() conGoi: EventEmitter<any> = new EventEmitter();
  public aloParent():void {
    this.conGoi.emit({name: this.name});
  }
  public chotien(amount: number):void {
    console.log(`Con la ${this.name} cám ơn cha cho con ${amount} đồng!`)
  }
}
