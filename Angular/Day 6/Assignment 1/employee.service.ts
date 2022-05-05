import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:string  = "http://localhost:3000/emp/";

  constructor(private httpObj:HttpClient) { }

  // Read All
  public getAllEmp(): Observable<any>
  {   
    
    // // we need to inject/add the security token in http request
    // const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40';
    // const header = { 'Authorization' : `Bearer ${hardcodedToken}`};
    // return this.httpObj.get(this.baseUrl, { headers: header});
    
    return this.httpObj.get(this.baseUrl);
  }

  // Read Single
  public getEmpById(empId:number):any
  {
    return this.httpObj.get(this.baseUrl + empId);
  }

  // Create
  public addEmp(empObj:any):any
  {
    return this.httpObj.post(this.baseUrl, empObj);
  }

  // Update
  public updateEmp(empObj:any):any
  {
    return this.httpObj.put(this.baseUrl + empObj.empNumber, empObj);
    // return this.httpObj.put(this.baseUrl, stObj);
  }


  // Delete
  public deleteEmp(empId:number):any
  {
    return this.httpObj.delete(this.baseUrl + empId);
  }
}

