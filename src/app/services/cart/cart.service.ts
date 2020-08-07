import { Injectable } from '@angular/core';
import { ProductDefinition } from '@app/shared/interfaces/product/product'
import { HttpClient } from '@angular/common/http'
import { User } from '@app/user'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  constructor(private http: HttpClient) {}

  postData(user: User) {
    const body = {
      name: user.name,
      phone: user.phone,
      deliveryAddress: user.deliveryAddress,
      productId: user.productId,
      quantity: user.quantity }

    return this.http.post('./api/products', body)
  }

  addToCart(product: ProductDefinition) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
