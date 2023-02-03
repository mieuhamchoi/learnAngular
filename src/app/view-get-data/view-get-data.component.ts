import { Component } from '@angular/core';
import { HttpServicesService } from '../services/http-services.service';

@Component({
  selector: 'getData',
  templateUrl: './view-get-data.component.html',
  styleUrls: ['./view-get-data.component.scss']
})
export class ViewGetDataComponent {
  constructor(private httpServices: HttpServicesService){}

  public  ngOnInit():void {
    this.httpServices.getSpawnList().subscribe(
    data => {
      console.log('data nhan duoc',data)
    },
    error => {
      console.error('loi',error);
    }
    );
    
  }
}
