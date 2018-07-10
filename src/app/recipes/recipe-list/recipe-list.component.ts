import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: []
})
export class RecipeListComponent {

  @Output('onSelectRecipe') onSelectRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is just a test recipe', 'https://images.unsplash.com/photo-1523549115643-7fc0b74a2250?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e71f1de3d5c218ec32cfc670d15d89b0&auto=format&fit=crop&w=1950&q=80'),
    new Recipe('Test Recipe 2', 'This is just another test recipe', 'https://images.unsplash.com/photo-1520236351980-16fbcb68e0e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9f41503875074e56d7da3b1e68a4bcf&auto=format&fit=crop&w=1418&q=80')
  ];

  selectRecipe(recipe: Recipe) {
    this.onSelectRecipe.emit(recipe);
  }
}
