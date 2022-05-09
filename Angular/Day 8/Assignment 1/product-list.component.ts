import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private _dataService: DataService,private  route:ActivatedRoute) {}

  ngOnInit(): void {
    let category  =this.route.snapshot.params["category"];
    this.products = this._dataService.getAllProducts().filter(entry => entry.category === category);
  }

  setView(str: string) {
    this.view = str;
    alert(str)
  }
}
