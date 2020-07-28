import {AfterViewInit, Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '@app/services/cart/cart.service';
import { FormBuilder } from '@angular/forms';
import {ToastsService} from "@app/services/toasts/toasts.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit, OnDestroy, AfterViewInit {
  items;
  checkoutForm;

  constructor(
    public toastsService: ToastsService,
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    setTimeout(() => {
      const toastInfo = {
        title: 'Готово!',
        text: 'Ваш заказ был отправлен',
        type: 'success'
      };

      this.toastsService.isToastMessageVisible.next(toastInfo);
    }, 2000)
    console.warn('Ваш заказ был отправлен', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    console.log('Компонет Корзина создался');
  }

  ngOnDestroy() {
    console.log('Верстка Корзина подъехала');
  }

  ngAfterViewInit() {
    console.log('Компонет Корзина  удалился');
  }
}
