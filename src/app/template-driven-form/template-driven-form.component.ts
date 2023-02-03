import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'templateDrivenForm',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  public name:string = ''
  constructor(private common: CommonService){}
  public submitForm():void {
    this.common.sendDataToServer({name: "phuoc", age: 21})
  }
}
