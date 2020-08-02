import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Компонет Доставка создался');
  }

  ngOnDestroy() {}

  ngAfterViewInit() {}
}
