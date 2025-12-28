import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTimePipe',
  standalone: true,
})
export class RelativeTimePipePipe implements PipeTransform {

  transform(value: Date | string): string {
    return value.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
  }
}
