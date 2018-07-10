import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: []
})
export class RecipesComponent {

  selectedRecipe: Recipe;

  selectRecipe(recipe: Recipe){
    this.selectedRecipe = recipe;
  }
}
