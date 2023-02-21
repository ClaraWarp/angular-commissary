import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryWellComponent } from './components/grocery-well/grocery-well.component';
import { LogWellComponent } from './components/log-well/log-well.component';

import { PantryWellComponent } from './components/pantry-well/pantry-well.component';
import { RecipeWellComponent } from './components/recipe-well/recipe-well.component';

const routes: Routes = [
  { path: 'pantry', component: PantryWellComponent },
  { path: 'recipes', component: RecipeWellComponent },
  { path: 'groceries', component: GroceryWellComponent },
  { path: 'calories', component: LogWellComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }