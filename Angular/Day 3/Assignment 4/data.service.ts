import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private employees: Employee[] = [
    {
      empNumber: 1,
      empName: 'Drake',
      empJob: 'Manager',
      empSalary: 50000,
      empDeptNo: 10,
      empGrade: 1,
    },
    {
      empNumber: 2,
      empName: 'Adam',
      empJob: 'Manager',
      empSalary: 60000,
      empDeptNo: 11,
      empGrade: 2,
    },
    {
      empNumber: 3,
      empName: 'John',
      empJob: 'Engineer',
      empSalary: 40000,
      empDeptNo: 12,
      empGrade: 3,
    },
    {
      empNumber: 4,
      empName: 'Mike',
      empJob: 'QA',
      empSalary: 40000,
      empDeptNo: 13,
      empGrade: 4,
    },
    {
      empNumber: 5,
      empName: 'Smith',
      empJob: 'Engineer',
      empSalary: 45000,
      empDeptNo: 14,
      empGrade: 1,
    },
    {
      empNumber: 6,
      empName: 'Blake',
      empJob: 'QA',
      empSalary: 45000,
      empDeptNo: 15,
      empGrade: 2,
    },
  ];

  getAllEmployee(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    alert("Added employee");
  }

  removeEmployee(employeeNumber: number) {
    let index = this.employees.findIndex(
      (emp) => emp.empNumber === employeeNumber
    );
    if (index !== -1) {
      this.employees.splice(index, 1);
      alert("Removed employee");
    }
  }
}
