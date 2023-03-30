import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { tag } from '../header/shared/models/tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{

  tags?:tag[]

constructor(foodServices:FoodService){
  this.tags=foodServices.getAlltags();
}
ngOnInit(): void {

}
}
