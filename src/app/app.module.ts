import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './shared/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import {FormsModule} from '@angular/forms';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
