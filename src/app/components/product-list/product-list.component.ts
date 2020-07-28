import {AfterViewInit, Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductDefinition} from '@app/shared/interfaces';
import {ApiService} from '@app/services';
import {ResDefinition} from '@app/shared/interfaces/product/res';
import { ToastsService } from '@app/services/toasts/toasts.service';

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
    public toastsService: ToastsService
  ) {}

  ngOnInit(): void {
    console.log('Компонет Каталог создался');
    if (this.apiService.getAllProducts().subscribe((res: ResDefinition) => {
      console.log(res)
      this.myProducts = res.content;})
    ){
      setTimeout(() => {
        const toastInfo = {
          title: 'Добро пожаловать!',
          text: 'Рады приветствовать Вас на нашем сайте',
          type: 'success'
        };

        this.toastsService.isToastMessageVisible.next(toastInfo);
      }, 2000)
    }  else
    {
      setTimeout(() => {
        const toastInfo = {
          title: 'Ошибка',
          text: 'Проблема на серевере',
          type: 'error'
        };

        this.toastsService.isToastMessageVisible.next(toastInfo);
      }, 3000)
    }
  };

  ngOnDestroy(){
    console.log('Верстка Каталог подъехала');
  };

  ngAfterViewInit(){
    console.log('Компонет Каталог  удалился');
  };
}
