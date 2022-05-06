import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit {
  empNumber: number = 0;
  empName: string = '';
  empJob: string = '';
  empSalary: number = 0;
  empDeptNo: number = 0;
  empGrade: number = 0;
  employees: Employee[] = [];

  constructor(private _empService: EmployeeService) {}

  ngOnInit(): void {}

  getData_click() {
    this._empService.getAllEmp().subscribe((response: any) => {
      console.log(response);
      this.employees = response;
    });
  }

  addData_click() {
    let empObj: Employee = {
      empNumber: this.empNumber,
      empName: this.empName,
      empJob: this.empJob,
      empSalary: this.empSalary,
      empDeptNo: this.empDeptNo,
      empGrade: this.empGrade,
    };

    this._empService.addEmp(empObj).subscribe((resData: any) => {
      alert('New Employee details are added to database');
      this.getData_click();
    });
  }

  updateData_click() {
    let empObj: Employee = {
      empNumber: this.empNumber,
      empName: this.empName,
      empJob: this.empJob,
      empSalary: this.empSalary,
      empDeptNo: this.empDeptNo,
      empGrade: this.empGrade,
    };

    this._empService.updateEmp(empObj).subscribe((resData: any) => {
      alert('Employee details are update to database');
      this.getData_click();
    });
  }

  deleteData_click(id: number) {
    this._empService.deleteEmp(id).subscribe((resData: any) => {
      alert('Employee details are deleted from database');
      this.getData_click();
    });
  }

  selectData_click(id: number) {
    this.empNumber = id;

    this._empService.getEmpById(id).subscribe((resData: any) => {
      (this.empName = resData.empName),
        (this.empJob = resData.empJob),
        (this.empSalary = resData.empSalary),
        (this.empDeptNo = resData.empDeptNo),
        (this.empGrade = resData.empGrade);
    });
  }

  clearFields() {
    this.empNumber = 0;
    (this.empName = ''),
      (this.empJob = ''),
      (this.empSalary = 0),
      (this.empDeptNo = 0),
      (this.empGrade = 0);
  }

  displayEmpDataByJob(){
    this._empService.displayEmpDataByJob("Engineer").subscribe((response: any) => {
      console.log(response);
      this.employees = response;
    });
  }

  displayEmpDataByDept(){
    this._empService.displayEmpDataByDept(10).subscribe((response: any) => {
      console.log(response);
      this.employees = response;
    });
  }

  displayEmpNameAndjob(){
    this._empService.displayEmpNameAndjob().subscribe((response: any) => {
      console.log(response);
      this.employees = response;
    });
  }

  displayEmpDataByExcludingDept(){
    this._empService.displayEmpDataByExcludingDept(10).subscribe((response: any) => {
      console.log(response);
      this.employees = response;
    });
  }

  sortEmp(){
    this._empService.sortEmp("empSalary").subscribe((response: any) => {
      console.log(response);
      this.employees = response;
    });
  }
}
