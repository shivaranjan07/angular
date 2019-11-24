import {Recipe} from './recipes/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from './shared/ingredient.model';
import {ShoppingListService} from './shoppingList.service';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('test',
      'this is a test recipe',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('sauce', 1),
        new Ingredient('tomatoes', 4),
        new Ingredient('paprika', 3)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // returns exact copy of recipes array  therefore we cant modify original array
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
