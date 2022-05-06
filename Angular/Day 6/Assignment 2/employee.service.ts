import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Employee } from './model/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl: string = 'http://localhost:3000/emp/';

  constructor(private httpObj: HttpClient) {}

  // Read All
  public getAllEmp(): Observable<any> {
    // // we need to inject/add the security token in http request
    // const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40';
    // const header = { 'Authorization' : `Bearer ${hardcodedToken}`};
    // return this.httpObj.get(this.baseUrl, { headers: header});

    return this.httpObj.get(this.baseUrl);
  }

  // Read Single
  public getEmpById(empId: number): any {
    return this.httpObj.get(this.baseUrl + empId);
  }

  // Create
  public addEmp(empObj: Employee): any {
    return this.httpObj.post(this.baseUrl, empObj);
  }

  // Update
  public updateEmp(empObj: Employee): any {
    return this.httpObj.put(this.baseUrl + empObj.empNumber, empObj);
  }

  // Delete
  public deleteEmp(empId: number): any {
    return this.httpObj.delete(this.baseUrl + empId);
  }

  public displayEmpDataByJob(job: string): Observable<any[]> {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map((res) => {
        return res.filter((entry) => entry.empJob == job);
      })
    );
  }

  public displayEmpDataByDept(deptNo: number): Observable<any[]> {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map((res) => {
        return res
          .filter(
            (entry) => entry.empJob == 'Manager' && entry.empDeptNo == deptNo
          )
          .map((entry) => {
            return { empName: entry.empName, empJob: entry.empJob };
          });
      })
    );
  }

  public displayEmpNameAndjob(): Observable<any[]> {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map((res) => {
        return res.map((entry) => {
          return { empName: entry.empName, empJob: entry.empJob };
        });
      })
    );
  }

  public displayEmpDataByExcludingDept(deptNo: number): Observable<any[]> {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map((res) => {
        return res.filter((entry) => entry.empDeptNo != deptNo);
      })
    );
  }

  public sortEmp(sortBy: string): Observable<any[]> {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map((res) => {
        return res.sort((a: any, b: any) => {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        });
      })
    );
  }
}
