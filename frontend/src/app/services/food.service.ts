import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { food } from '../components/partials/header/shared/models/food';
import { tag } from '../components/partials/header/shared/models/tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():food[]{
    return sample_foods;
  }
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAlltags():tag[]{
    return sample_tags;
  }
  getAllfoodsByTag(tag:string):food[]{
    return tag=="All"?
    this.getAll(): this.getAll().filter(food=>food.tags?.includes(tag))
  }
}
