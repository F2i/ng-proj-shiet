import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('recipe name 0', 'recipe desc 0', 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg'),
    new Recipe('recipe name 1', 'recipe desc 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY165uMZXL8Pxy6SeI60TiqoiS5MJ8w_LHu65WMCLwlCuGsOJNe9odOTOlk87hy12TLBQ&usqp=CAU')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
