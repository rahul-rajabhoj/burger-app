import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe(
      'Manchurian',
      'Manchurian, a style of food',
      'https://www.vegrecipesofindia.com/wp-content/uploads/2012/05/veg-manchurian-gravy-recipe-1b-500x500.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
