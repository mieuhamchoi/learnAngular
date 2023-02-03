import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  public isLogin:boolean = false
  constructor() { }
}
