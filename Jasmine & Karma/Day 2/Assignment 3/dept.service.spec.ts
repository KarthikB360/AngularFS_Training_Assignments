import { TestBed } from '@angular/core/testing';

import { DeptService } from './dept.service';

describe('DeptService', () => {
  let service: DeptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Check for default depts', () => {
    //expect(service.depts.length).toBe(4);
    expect(service.depts[0]['deptname']).toBe('dept1');
  });

  it('Check for addDept', () => {
    let newProd: any = { deptid: 5, deptname: 'dept5' };
    service.addDept(newProd);
    //expect(service.depts.length).toBe(5);
    expect(service.depts[4]['deptname']).toBe('dept5');
  });

  it('check for remove dept -- for valid number', () => {
    let initialLength = service.depts.length;
    service.removeDept(1);
    //expect(service.depts.length).toBe(3);
    expect(service.depts.length).toBeLessThan(initialLength);
  });

  it('Check for remove dept -- for invalid number', () => {
    let initialLength = service.depts.length;
    service.removeDept(500);
    expect(service.depts.length).toEqual(initialLength);
  });
});
