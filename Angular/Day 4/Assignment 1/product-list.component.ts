import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  view: string = 'Small Grid';

  products: Product[] = [];

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.products = this._dataService.getAllProducts();
  }

  setView(str: string) {
    this.view = str;
    alert(str)
  }
}
