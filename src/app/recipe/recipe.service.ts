import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { Recipe } from './models/recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'recipe name 0',
      'recipe desc 0',
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
      [
        new Ingredient("Pepe", 1),
        new Ingredient("Ricardo", 1)
      ]

    ),
    new Recipe(
      'recipe name 1',
      'recipe desc 1', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY165uMZXL8Pxy6SeI60TiqoiS5MJ8w_LHu65WMCLwlCuGsOJNe9odOTOlk87hy12TLBQ&usqp=CAU',
      [
        new Ingredient("Sam", 1),
        new Ingredient("Ricardo", 1)
      ]
    )
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }



}
