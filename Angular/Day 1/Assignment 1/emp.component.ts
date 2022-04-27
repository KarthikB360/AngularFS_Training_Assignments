import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
})
export class EmpComponent implements OnInit {
  public empId: number = 54654564;
  public empName: string = 'Stephen';
  public empJob: string = 'Manager';
  public empSalary: number = 75000;
  public empDept: number = 10;

  public users: any[] = ['xyz','pqr'];

  constructor() {}

  ngOnInit(): void {}
}
