import {AfterViewInit, Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '@app/services/cart/cart.service';
import {  FormGroup, FormBuilder } from '@angular/forms';
import { Validators} from "@angular/forms";
let form = document.querySelector('.input');

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit, OnDestroy, AfterViewInit {
  items;
  checkoutForm;
  signInForm: FormGroup;

  constructor(
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

    console.warn('Ваш заказ был отправлен', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let nameValue = e.target.elements.name.value;
      let loginValue = e.target.elements.login.value;
      let addressValue = e.target.elements.address.value;

      if (!nameValue || !loginValue) {
        alert('Поля не должны быть пустыми');
      } else if (loginValue && loginValue.length < 7) {
        alert('Номер не должен быть меньше 7 символов');
      }
    });
  }

  ngOnDestroy() {
    console.log('Верстка Корзина подъехала');
  }

  ngAfterViewInit() {
    console.log('Компонет Корзина  удалился');
  }
}
