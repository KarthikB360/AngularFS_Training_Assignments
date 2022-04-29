import { outputAst } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradePipe',
})
export class GradePipePipe implements PipeTransform {
  transform(input: number): string {
    let output: string = '';

    switch (input) {
      case 1:
        output = 'Outstanding';
        break;
      case 2:
        output = 'Excellent';
        break;
      case 2:
        output = 'Good';
        break;
      case 2:
        output = 'Average';
        break;
      default:
        output = 'Average';
    }
    return output;
  }
}
