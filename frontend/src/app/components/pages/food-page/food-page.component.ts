import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { food } from '../../partials/header/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
food!:food;

constructor(activateRoute:ActivatedRoute,foodServices:FoodService){
  activateRoute.params.subscribe((params=>{
    if(params["id"])
    this.food=foodServices.getFoodById(params["id"])
  }))
}
ngOnInit(): void {

}
}
