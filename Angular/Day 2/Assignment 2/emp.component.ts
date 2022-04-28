import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
})
export class EmpComponent implements OnInit,OnChanges {

  @Input()
  sortBy:string = "";
  
  employees:Employee[] = [
    {empNumber:1,empName:"Drake",empJob:"Manager",empSalary:50000,empDeptNo:10},
    {empNumber:2,empName:"Adam",empJob:"Manager",empSalary:60000,empDeptNo:11},
    {empNumber:3,empName:"John",empJob:"Engineer",empSalary:40000,empDeptNo:12},
    {empNumber:4,empName:"Mike",empJob:"QA",empSalary:40000,empDeptNo:13},
    {empNumber:5,empName:"Smith",empJob:"Engineer",empSalary:45000,empDeptNo:14},
    {empNumber:6,empName:"Blake",empJob:"QA",empSalary:45000,empDeptNo:15},
  ];

  sortedEmployees:Employee[] = [];

  constructor() {}

  ngOnChanges(): void {
    this.sortedEmployees = this.employees.sort((a:any, b:any) => {
      if (a[this.sortBy] < b[this.sortBy])
        return -1;
      if (a[this.sortBy] > a[this.sortBy])
        return 1;
      return 0;
    });

  }

  ngOnInit(): void {
  }
}
