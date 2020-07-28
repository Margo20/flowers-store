import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";
import { ToastInfo } from '@app/shared/interfaces/toasts/toasts';

@Injectable({
  providedIn: 'root'
})
export class ToastsService {
  isToastMessageVisible = new BehaviorSubject(null);

  constructor() { }
}
