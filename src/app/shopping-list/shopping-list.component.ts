import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: []
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [];
  selectedIngredient: Ingredient = new Ingredient();

  addIngredient(ingredient: Ingredient): void{
    if(ingredient.id <= 0){
      ingredient.id = this.ingredients.length > 0 ? this.ingredients.sort((a,b) => a.id - b.id)[0].id + 1 : 1;
      this.ingredients.push(ingredient);
    }
  }

  deleteIngredient(id: number): void{
    this.ingredients.splice(this.findIngredientIndex(id), 1);
  }

  clearIngredient(): void{
    this.selectedIngredient = new Ingredient();
  }

  findIngredientIndex(id: number): number{
    for(let i = 0; i < this.ingredients.length; i++){
      if(this.ingredients[i].id === id){
        return i;
      }
    }
    return -1;
  }

}
