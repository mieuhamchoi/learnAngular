
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  private targetPoint = 'https://api.pokemoninmylife.com/getSpawnList'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  public getSpawnList():Observable<any> {
    return this.httpClient.get<any>(this.targetPoint, this.httpOptions)
  }
}
