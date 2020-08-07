import { Component,HostBinding,  OnInit } from '@angular/core';
import { UserNameDefnition } from '@app/shared/interfaces'
import { UserService } from '@app/services/user/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  ]
})
export class AppComponent implements OnInit {
  // names: UserNameDefnition[] = [];
  myTelephone:  string = 'Наши телефоны: +375-29-999-99-99'  ;
  takingOrders: string =  'Прием заказов: пн-пт 9:00- 21:00';


  constructor(
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.user.subscribe(
      res => console.log(res)
    )
  }


}