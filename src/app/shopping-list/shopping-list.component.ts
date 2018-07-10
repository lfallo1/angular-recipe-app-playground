import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: []
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('sugar', 10),
    new Ingredient('flour', 4),
    new Ingredient('milk', 0.5)
  ];

  constructor() { }

  ngOnInit() {
  }

}
