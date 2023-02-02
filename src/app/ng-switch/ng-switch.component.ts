import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent {
  public number:number = 0
  constructor() {}
  public inr = ():void => {
    this.number += 1
  }
}
