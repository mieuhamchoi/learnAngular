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
  public districtList:string[] = []
  constructor() {}

  public ngOnInit(): void {
    //console.log("list province in VietNam", this.vietnamProvinceList)
  }
  public changeProvince = (event: any) => {
    let search = event.target.value;
    let kq = this.vietnamProvinceList.filter(province => province.name === search)
    if(kq && kq.length > 0) {
      this.districtList = kq[0].district
    }else {
      this.districtList = []
    }
  }

}
