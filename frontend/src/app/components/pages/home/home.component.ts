import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
  let foodsObservable:Observable<food[]>
  activatedRoute.params.subscribe((params)=>{
    if(params["searchTerm"])
      foodsObservable=this.foodService.getAllFoodBySearchTerm(params["searchTerm"])
    else if(params["tag"])
    foodsObservable=this.foodService.getAllfoodsByTag(params["tag"])
    else
      foodsObservable=foodService.getAll();
      foodsObservable.subscribe((serverFoods)=>{
        this.foods=serverFoods;
      })

  })

}
ngOnInit(): void {}
}
