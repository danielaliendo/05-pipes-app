import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFlyCase'
})

export class CanFlyCasePipe implements PipeTransform {
  transform(value: string): "can fly" | "can't fly" {
    return (value) ? "can fly" : "can't fly"
  }
}
