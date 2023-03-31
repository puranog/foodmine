import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../components/partials/header/shared/constants/urls';
import { food } from '../components/partials/header/shared/models/food';
import { tag } from '../components/partials/header/shared/models/tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private Http:HttpClient) { }

  getAll():Observable<food[]>{
    return this.Http.get<food[]>(FOODS_URL);
  }
  getAllFoodBySearchTerm(searchTerm:string){
    return this.Http.get<food[]>(FOODS_BY_SEARCH_URL+searchTerm);
  }

  getAlltags(): Observable<tag[]>{
    return this.Http.get<tag[]>(FOODS_TAGS_URL);
  }

  getAllfoodsByTag(tag:string): Observable<food[]>{
    return tag=="All"?
    this.getAll():
     this.Http.get<food[]>(FOODS_BY_TAG_URL+tag)
  }
  getFoodById(foodId:string):Observable<food>{
    return this.Http.get<food>(FOODS_BY_ID_URL+foodId);
  }
}
