import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientAdded = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Tomato', 3),
    new Ingredient('Apple', 5)
  ]
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientAdded.emit(this.ingredients)
  }
}
