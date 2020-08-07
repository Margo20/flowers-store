
import {ToastsService} from "@app/services/toasts/toasts.service";
import { UserService } from '@app/services/user/user.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '@app/services/cart/cart.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit, OnDestroy, AfterViewInit {
  items;
  checkoutForm: FormGroup;
  id: string;

  constructor(
    public toastsService: ToastsService,
    private cartService: CartService,
    private formBuilder: FormBuilder,
    public userService: UserService
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: [this.userService.name, [
        Validators.required,
      ]],
      telephone: [this.userService.telephone, [
        Validators.required,
      ]],
      address: [null, [
        Validators.required,
      ]],
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
    alert('Ваш заказ был отправлен');

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    console.log('Компонет Корзина создался');
    this.userService.user.subscribe(
      res => console.log(res)
    )
  }


  ngOnDestroy() {}

  ngAfterViewInit() {}
}
