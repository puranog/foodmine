import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { food } from '../../partials/header/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
food!:food;

constructor(activateRoute:ActivatedRoute,foodServices:FoodService,private cartservice:CartService,private router:Router){
  activateRoute.params.subscribe((params=>{
    if(params["id"])
    foodServices.getFoodById(params["id"]).subscribe(serverFood=>{
      this.food=serverFood;
    })
  }))
}
ngOnInit(): void {

}
addTocard(){
this.cartservice.addTocart(this.food);
this.router.navigateByUrl('cart-page');
}
}
