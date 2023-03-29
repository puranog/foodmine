import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { food } from '../../partials/header/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

foods:food[]=[];

constructor(private foodService:FoodService){
  this.foods=foodService.getAll();
}
ngOnInit(): void {}
}
