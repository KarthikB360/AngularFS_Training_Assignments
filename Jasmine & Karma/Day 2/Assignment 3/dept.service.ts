import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeptService {
  depts: any[] = [
    { deptid: 1, deptname: 'dept1' },
    { deptid: 2, deptname: 'dept2' },
    { deptid: 3, deptname: 'dept3' },
    { deptid: 4, deptname: 'dept4' },
  ];

  addDept(deptObj: any) {
    this.depts.push(deptObj);
  }

  removeDept(dno: number) {
    let index = this.depts.findIndex((item) => item.deptid == dno);
    if (index != -1) {
      this.depts.splice(index, 1);
    }
  }

  constructor() {}
}
