import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})

export class UncommonPageComponent {

  public name: string = 'Daniela'
  public gender: 'male' | 'female' = 'female'

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  public clientsMap = {
    '=0': 'we have no clients waiting',
    '=1': 'we have a client waiting',
    'other': 'we have # clients waiting',
  }

  public clients = ['Marcos', 'Daniela', 'Yamila', 'Abril']

  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canadá'
  }

  changeClient() {
    this.name = this.name === 'Marcos' ? 'Daniela' : 'Marcos'
    this.gender = this.gender === 'male' ? 'female' : 'male'
  }

  deleteClient() {
    this.clients.shift();
  }

  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log(value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promesa resuelta')
    }, 3500)
  })

}
