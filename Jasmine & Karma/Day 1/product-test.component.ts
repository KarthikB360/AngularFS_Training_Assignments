import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.css']
})
export class ProductTestComponent implements OnInit {

  productName:string = "";
  unitPrice:number = 1;
  quantity:any = 1;
  totalAmount:string = "";


  constructor() { }

  ngOnInit(): void {
  }

  getTotalAmount(){
    this.totalAmount = String(this.unitPrice * this.quantity);
    console.log(this.totalAmount)
  }

}
