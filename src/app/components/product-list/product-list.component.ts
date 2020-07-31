import {AfterViewInit, Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductDefinition} from '@app/shared/interfaces';
import {ApiService} from '@app/services';
import {ResDefinition} from '@app/shared/interfaces/product/res';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']

})

export class ProductListComponent implements OnInit, OnDestroy, AfterViewInit {
  myProducts: ProductDefinition[] = [];
  product: ProductDefinition = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    console.log('Компонет Каталог создался');
    this.apiService.getAllProducts().subscribe((res: ResDefinition) => {
      console.log(res)
      this.myProducts = res.content;
    })
  }

  ngOnDestroy() {}

  ngAfterViewInit() {}
}
