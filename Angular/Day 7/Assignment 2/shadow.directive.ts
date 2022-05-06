import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective implements OnInit{

  @Input()
  appShadow:string ="";

  constructor(private _element:ElementRef) { 

  }

  ngOnInit(): void {
    if(this.appShadow == ""){
      this.appShadow="red";
    }
    this._element.nativeElement.style.textShadow = `1px 1px 0 ${this.appShadow}`;
  }

}
