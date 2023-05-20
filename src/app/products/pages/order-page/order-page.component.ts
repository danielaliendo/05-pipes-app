import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order-page',
  templateUrl: './order-page.component.html',
  styles: [
  ]
})

export class OrderPageComponent {

  public isUppercase: boolean = false
  public orderBy?: keyof Hero

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Iron Man',
      canFly: true,
      color: Color.red,
    },
  ]

  toggleUpercase() {
    this.isUppercase = !this.isUppercase
  }

  changeOrder (value: keyof Hero) {
    this.orderBy = value
  }

}
