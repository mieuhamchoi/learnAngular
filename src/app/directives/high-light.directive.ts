import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input('appHighLight') public appHighLight = '';
  constructor(private el:ElementRef) {}
  public ngOnInit():void {
    if (this.appHighLight) {
      this.el.nativeElement.style.color = this.appHighLight;
    }else {
      this.el.nativeElement.style.color = 'blue';
    }
    
  }
}
