import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Компонет Оплата создался');
  }

  ngOnDestroy() {}

  ngAfterViewInit() {}
}
