import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
})
export class EmpComponent implements OnInit, OnChanges {
  @Input()
  sortBy: string = '';

  employees: Employee[] = [];

  emp = {
    empNumber: 0,
    empName: '',
    empJob: '',
    empSalary: 0,
    empDeptNo: 0,
    empGrade: 0,
  };

  constructor(private _dataService: DataService) {}

  ngOnChanges(): void {
    // this.sortedEmployees = this.employees.sort((a: any, b: any) => {
    //   if (a[this.sortBy] < b[this.sortBy]) return -1;
    //   if (a[this.sortBy] > a[this.sortBy]) return 1;
    //   return 0;
    // });
  }

  ngOnInit(): void {
    this.employees = this.getAllEmployee();
  }

  addEmployee() {
    this._dataService.addEmployee(this.generateEmployeeObject());
    this.clearEmployee();
  }

  removeEmployee() {
    this._dataService.removeEmployee(this.emp.empNumber);
    this.clearEmployee();
  }

  getAllEmployee(): Employee[] {
    return this._dataService.getAllEmployee();
  }

  generateEmployeeObject(): Employee {
    let employeeEntry: Employee = new Employee();
    employeeEntry.empNumber = this.emp.empNumber;
    employeeEntry.empName = this.emp.empName;
    employeeEntry.empJob = this.emp.empJob;
    employeeEntry.empSalary = this.emp.empSalary;
    employeeEntry.empDeptNo = this.emp.empDeptNo;
    employeeEntry.empGrade = this.emp.empGrade;
    return employeeEntry;
  }

  clearEmployee() {
    this.emp = {
      empNumber: 0,
      empName: '',
      empJob: '',
      empSalary: 0,
      empDeptNo: 0,
      empGrade: 0,
    };
  }
}
