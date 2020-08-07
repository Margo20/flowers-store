import { Injectable } from '@angular/core';
import { Subject} from "rxjs";
import { UserNameDefnition } from '@app/shared/interfaces';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  name: string = '';
  telephone: string = '';

   user =  new Subject<{login: string}>();

  constructor() {}
}
