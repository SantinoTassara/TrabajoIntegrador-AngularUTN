import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setTimeFormat',
  standalone: true
})
export class SetTimeFormatPipe implements PipeTransform {
  transform(value: string | Date | undefined): string {
    if (!value) return '';

    const messageDate = new Date(value);
    const today = new Date();

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };

    const fullOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };

    if (today.toDateString() === messageDate.toDateString()) {
      return messageDate.toLocaleTimeString('es-ES', timeOptions);
    } else {
      const formatted = messageDate.toLocaleDateString('es-ES', fullOptions);

      return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    }
  }
}
