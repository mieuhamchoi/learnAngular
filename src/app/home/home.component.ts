import { Component } from '@angular/core';
import { Test } from './testInterface'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  public vietnamProvinceList = [{name: "Chọn tỉnh thành", district: []},{name: "HCM", district: ['Q8', 'Q7', 'Q6']}, {name: "Tien Giang", district: ['My Tho', 'Trung An', 'Ha Noi']}]
  public selectedObj:Test = {name: '', district: []}
  constructor() {}

  public ngOnInit(): void {
    //console.log("list province in VietNam", this.vietnamProvinceList)
  }
  public changeProvince = (event: any) => {
    //console.log("test", this.selectedObj) // printf test {"name":"HCM","district":["Q8","Q7","Q6"]}
    this.selectedObj = event.target.value;
    console.log(this.selectedObj) // printf [object object]
  }

  public objToJson = (obj: object):string => {
    return JSON.stringify(obj)
  }
}
