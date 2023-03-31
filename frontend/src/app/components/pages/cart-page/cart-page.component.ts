import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cart } from '../../partials/header/shared/models/cart';
import { CartItem } from '../../partials/header/shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:cart;
  constructor(private cartServices:CartService){
    this.cartServices.getCardObservable().subscribe((cart)=>{
      this.cart=cart;
    })
  }
  ngOnInit(): void {

  }
  removeFromCart(cartItem:CartItem){
    this.cartServices.removeFromCart(cartItem.food.id)
  }
  ChangeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartServices.changeQuantity(cartItem.food.id,quantity);
  }
}
