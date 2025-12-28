import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTimePipe',
  standalone: true,
})


//PIPE OBSOLETO (ME EQUIVOQUE EN LA LOGICA y EL NOMBRE)
export class RelativeTimePipePipe implements PipeTransform {

  transform(value: Date | string): string {
    return value.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
  }
}
