import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [
    { pid: 1, pname: 'Puma shoes', price: 5000, category: 'shoes' },
    { pid: 2, pname: 'Nike shoes', price: 10000, category: 'shoes' },
    { pid: 3, pname: 'Samsung M1', price: 20000, category: 'mobiles' },
    { pid: 4, pname: 'IPhone X', price: 5000, category: 'mobiles' },
    { pid: 5, pname: 'IPhone X2', price: 5000, category: 'mobiles' },
    { pid: 6, pname: 'IPhone X3', price: 5000, category: 'mobiles' },
  ];

  constructor() {}

  ngOnInit(): void {}

  public onRemoveClick(productId: number) {
    let index = this.products.findIndex((prod: any) => prod.pid == productId);
    this.products.splice(index, 1);
  }
}
