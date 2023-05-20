import { Component } from '@angular/core';

@Component({
  selector: 'products-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css']
})

export class NumbersPageComponent {

  public totalSells: number = 2567789.56567;
  public percent: number = 0.48567;

}
