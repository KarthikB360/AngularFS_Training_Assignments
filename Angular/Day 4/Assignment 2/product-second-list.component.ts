import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product-second-list',
  templateUrl: './product-second-list.component.html',
  styleUrls: ['./product-second-list.component.css'],
})
export class ProductSecondListComponent implements OnInit {
  products: Product[] = [];

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.products = this._dataService.getAllProducts();
  }
}
