import { Component,HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  myTelephone:  string = 'Наши телефоны: +375-29-999-99-99'  ;
  takingOrders: string =  'Прием заказов: пн-пт 9:00- 21:00';
}

