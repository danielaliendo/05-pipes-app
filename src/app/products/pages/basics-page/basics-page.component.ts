import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})

export class BasicsPageComponent {

  public nameLowercase: string = 'daniela liendo'
  public nameUppercase: string = 'DANIELA LIENDO'
  public nameCamelcase: string = 'DaNiElA lIeNdO'

  public date: Date = new Date();

}
