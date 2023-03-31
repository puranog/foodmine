import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cart } from './shared/models/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cardQuantity=0;
constructor(carservice:CartService){
carservice.getCardObservable().subscribe((newCart)=>{
  this.cardQuantity=newCart.totalCount;
})
}
ngOnInit(): void {

}
}
