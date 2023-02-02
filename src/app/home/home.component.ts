import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name:string = 'Phuoc'
  public age:number = 18
  public fruitList: string[] = ['xoài', 'cam', 'bưởi']
  public fruitListDetail = [{name: 'Xoài', price: 50000}, {name: 'Cam', price: 20000}, {name: 'Ổi', price: 5000}] 
  constructor() {}
  public resetname = ():void => {
    this.name = ''
  }
  public ngOnInit(): void {
    console.log('List fruit list: ', this.fruitList)
    console.log('List fruit list detail: ', this.fruitListDetail)
  }
}
