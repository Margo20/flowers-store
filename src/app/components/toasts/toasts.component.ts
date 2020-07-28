import { Component, OnInit } from '@angular/core';
import { ToastsService } from '@app/services/toasts/toasts.service';
import {ToastInfo} from "@app/shared/interfaces/toasts/toasts";

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {

  constructor(
    public toastsService: ToastsService
  ) {}

  ngOnInit(): void {
    this.toastsService.isToastMessageVisible
      .subscribe(res => {
        console.log(res);

        if (res) {
          setTimeout(() => this.toastsService.isToastMessageVisible.next(null),2000);
        }
      });
  }

}
