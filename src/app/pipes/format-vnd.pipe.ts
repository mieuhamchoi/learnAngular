import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatVND'
})
export class FormatVNDPipe implements PipeTransform {

  transform(value: number, ...args: number[]): string {
    let decimalPlaces = value.toString().length; // Để xác định số chữ số của một số thực
    let formattedNumber = value.toLocaleString('vi-VN', { style: 'decimal', maximumFractionDigits: decimalPlaces });
    return formattedNumber + ' VND';
  }

}
