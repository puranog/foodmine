import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cart } from './shared/models/cart';
import { UserService } from 'src/app/services/user.service';
import { user } from './shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user!:user;
  cardQuantity=0;
constructor(carservice:CartService,private userservices:UserService){
carservice.getCardObservable().subscribe((newCart)=>{
  this.cardQuantity=newCart.totalCount;
});
userservices.userObservable.subscribe((newUser)=>{
this.user=newUser;
})
}
ngOnInit(): void {

}
logout(){
this.userservices.Logout();
}

get isAuth(){
  return this.user.token;
}


}
