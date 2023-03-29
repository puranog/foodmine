import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm="";

constructor(activateRoute:ActivatedRoute,private router:Router){
  activateRoute.params.subscribe((params)=>{
    if(params["searchTerms"])
    this.searchTerm=params["searchTerms"]
  })
}
ngOnInit(): void {

}

search(term:string):void{
  if (term)
  this.router.navigateByUrl('/search/'+term);

}
}
