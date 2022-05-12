import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradePipe'
})
export class GradePipe implements PipeTransform {

  transform(input: number): string {
    let output: string = '';

    switch (input) {
      case 1:
        output = 'Outstanding';
        break;
      case 2:
        output = 'Excellent';
        break;
      case 3:
        output = 'Good';
        break;
      case 4:
        output = 'Average';
        break;
      case 5:
        output = 'Poor';
        break;
      default:
        output = 'Poor';
    }
    return output;
  }
}
