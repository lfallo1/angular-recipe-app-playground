import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: []
})
export class ShoppingListEditComponent {

  @Output('onAddIngredient') onAddIngredient = new EventEmitter<Ingredient>();
  @Output('onDeleteIngredient') onDeleteIngredient = new EventEmitter<number>();
  @Output('onClearIngredient') onClearIngredient = new EventEmitter<void>();
  @Input('ingredient') ingredient: Ingredient = new Ingredient();


  addIngredient(): void{
    if(this.ingredient.name && this.ingredient.amount > 0) {
      if(this.ingredient.id <= 0) {
        this.onAddIngredient.emit(this.ingredient);
      }
      this.onClearIngredient.emit();
    }
  }

  deleteIngredient(): void{

    if(this.ingredient.id) {
      this.onDeleteIngredient.emit(this.ingredient.id);
      this.onClearIngredient.emit();
    }
  }
}
