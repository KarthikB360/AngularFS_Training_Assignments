import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(input:any[], min:number, max:number): any[] {
    let key = "empSalary"
    return input.filter(item => item[key]>=min && item[key]<=max);
  }

}
