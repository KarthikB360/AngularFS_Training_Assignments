import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()
  productList:any = [];

  @Output()
  onRemoveClick = new EventEmitter<number>();

  constructor() { }
  
  ngOnInit(): void {
  }

  public removeProduct(id: number)
  {
    this.onRemoveClick.emit(id);
  }

}
