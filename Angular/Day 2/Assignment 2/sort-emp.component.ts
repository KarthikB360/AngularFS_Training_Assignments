import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-emp',
  templateUrl: './sort-emp.component.html',
  styleUrls: ['./sort-emp.component.css']
})
export class SortEmpComponent implements OnInit {

  @Output()
  onSortChanged:EventEmitter<string> = new EventEmitter();
  
  sortChanged(sortBy:string){
    this.onSortChanged.emit(sortBy);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
