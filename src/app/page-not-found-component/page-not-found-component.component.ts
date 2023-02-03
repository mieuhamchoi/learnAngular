import { Component } from '@angular/core';
import { AuthServicesService } from '../services/auth-services.service';

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.scss']
})
export class PageNotFoundComponentComponent {
  constructor(private authServices: AuthServicesService){}
  public login() {
    this.authServices.isLogin = true;
  }
}
