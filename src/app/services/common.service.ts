import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public couter: number = 5
  constructor() {}
  public square(n: number) :number {
    return n * n
  }
  public sendDataToServer(data: object):void {
    console.log("Data sẽ gửi lên server", data)
  }
}
