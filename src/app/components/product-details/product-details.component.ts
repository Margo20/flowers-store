import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService} from '@app/services/cart/cart.service';
import { ProductDefinition } from '@app/shared/interfaces/product/product'
import {ApiService} from '@app/services';
import {ResDefinition} from '@app/shared/interfaces/product/res';
import { ToastsService } from '@app/services/toasts/toasts.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  myProducts: ProductDefinition[] = [];
  product: ProductDefinition = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private cartService: CartService,
    public toastsService: ToastsService,
  ) {
  }

  addToCart(product) {
    window.alert('Ваш продукт добавлен в корзину!');
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    if(
      this.apiService.getAllProducts().subscribe((res: ResDefinition) => {
      console.log(res)
      this.myProducts = res.content;

      this.activatedRoute.paramMap.subscribe(params => {
        this.product = res.content[+params.get('productId')];
        console.log(this.product.img);
      });
      })
    ){
      setTimeout(() => {
        const toastInfo = {
          title: 'Ваш выбор :',
          text: 'подробное описание ',
          type: 'success'
        };

        this.toastsService.isToastMessageVisible.next(toastInfo);
      }, 3000)
    }  else
    {
      setTimeout(() => {
        const toastInfo = {
          title: 'Ошибка',
          text: 'Не работает',
          type: 'error'
        };

        this.toastsService.isToastMessageVisible.next(toastInfo);
      }, 3000)
    }
  };
}
