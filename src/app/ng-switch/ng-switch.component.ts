import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent {
  public number:number = 0
  public couter:number = 0
  public couterSquare = 0
  constructor(private common: CommonService) {}
  public inr = ():void => {
    this.number += 1
  }
  public ngOnInit() {
    this.couter = this.common.couter;
    this.couterSquare = this.common.square(this.couter)
  }
}
