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
}
