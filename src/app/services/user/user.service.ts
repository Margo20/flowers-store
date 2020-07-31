import { Injectable } from '@angular/core';
import { Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  name: string = 'Roma';

   user =  new Subject<{login: string}>();

  constructor() {}
}
