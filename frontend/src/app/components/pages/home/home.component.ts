import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { food } from '../../partials/header/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

foods:food[]=[];

constructor(private foodService:FoodService,activatedRoute:ActivatedRoute){
  activatedRoute.params.subscribe((params)=>{
    if(params["searchTerm"])
      this.foods=this.foodService.getAllFoodBySearchTerm(params["searchTerm"])
    else if(params["tag"])
    this.foods=this.foodService.getAllfoodsByTag(params["tag"])
    else
      this.foods=foodService.getAll();

  })

}
ngOnInit(): void {}
}
