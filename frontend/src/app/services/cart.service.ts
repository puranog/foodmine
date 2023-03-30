import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cart } from '../components/partials/header/shared/models/cart';
import { food } from '../components/partials/header/shared/models/food';
import { CartItem } from '../components/partials/header/shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:cart=this.getCardFronLocalStorage();
private cartsubjet : BehaviorSubject<cart>=new BehaviorSubject(this.cart);
  constructor() { }
  addTocart(food:food):void{
    let cartItem=this.cart.items
    .find(item=>item.food.id===food.id)
    if(cartItem)
      return;
    this.cart.items.push(new CartItem(food));
    this.setCardtoLocalStorage();
  }
  removeFromCart(foodId:string):void{
    this.cart.items=this.cart.items.filter(item=>{
      item.food.id!=foodId;

    });
    this.setCardtoLocalStorage();
  }
  changeQuantity(foodId:string,quantity:number){
    let cartItem=this.cart.items.find(item=>{
      item.food.id===foodId;
      if(!cartItem) return;
      cartItem.quantity=quantity;
      cartItem.price=quantity*cartItem.food.price;
    });
    this.setCardtoLocalStorage();
  }
  clearCart(){
    this.cart=new cart();
    this.setCardtoLocalStorage();
  }
  getCardObservable():Observable<cart>{
    return this.cartsubjet.asObservable();
  }
  private setCardtoLocalStorage():void{
    this.cart.totalPrice=this.cart.items.reduce((prevSum,CurrentItem)=>prevSum+CurrentItem.price,0);
    this.cart.totalCount=this.cart.items.reduce((prevSum,CurrentItem)=>prevSum+CurrentItem.quantity,0);
    const CarJson=JSON.stringify(this.cart);
    localStorage.setItem('cart',CarJson);
    this.cartsubjet.next(this.cart);
  }
  private getCardFronLocalStorage():cart{
    const cartJson=localStorage.getItem('cart')
    return cartJson?JSON.parse(cartJson):new cart();
  }
}
