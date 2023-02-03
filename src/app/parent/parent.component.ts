import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  public textChao = ''
  @ViewChild('thangTeo') thangTeo: ChildComponent | undefined
  @ViewChild('thangTi') thangTi: ChildComponent | undefined

  public conGoi(con: any):void {
    this.textChao = `${con.name}`
  }
  public choConTien() {
    this.thangTeo?.chotien(20000);
    this.thangTi?.chotien(20000);
  }
}
