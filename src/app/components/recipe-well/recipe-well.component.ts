import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../recipe'
import { CommissaryService } from 'src/app/commissary.service';
import { PantryItem } from 'src/app/pantryItem';
import { CalorieLog } from 'src/app/calorieLog';

@Component({
  selector: 'app-recipe-well',
  templateUrl: './recipe-well.component.html',
  styleUrls: ['./recipe-well.component.css']
})
export class RecipeWellComponent implements OnInit {
  createFormFlag: boolean = false
  recipes: Recipe[] = []
  currCreateInput: string = ''
  pantryItems: PantryItem[] = []

  constructor(private commissaryService: CommissaryService) {

  }

  ngOnInit(): void {
    this.getPantry()
    this.getRecipes()
  }

  getPantry(): void {
    this.commissaryService.getPantry().subscribe(pantryItems => this.pantryItems = pantryItems)
  }

  getRecipes(): void {
    this.commissaryService.getRecipes().subscribe(recipes => this.recipes = recipes)
  }

  createFormToggle(): void {
    this.createFormFlag = !this.createFormFlag
  }

  createRecipe(): void {
    const newRecipe: Recipe = { name: this.currCreateInput, ingredients: [], log: [] };
    this.commissaryService.addRecipe(newRecipe).subscribe(recipe => {
      this.recipes.push(recipe);
    });
    this.currCreateInput = '';
  }

  logRecipe(recipe: Recipe): void {
    if ('ok' == prompt('type "ok" to confirm you want to log recipe')) {
      let newLog : CalorieLog[] = recipe.log || []
      newLog.push({
        date: new Date(),
        logCalories: 0,
        logName: recipe.name
      })
      const updRecipe = { ...recipe, log: newLog }
      this.commissaryService.updateRecipe(updRecipe).subscribe((data: Recipe) => {
        this.recipes.forEach((inRecipe) => {
          if (inRecipe.id == recipe.id) {
            inRecipe.log = newLog
          }
        });
      })
    }
  }

  evaluateCraftable(recipe: Recipe): boolean {

    // so basically the idea here is to see if the ingredients of recipe are all the stocked pantry items
    // going to start by getting the pantry items that are in the pantry stock
    // im also going to make a copy of the the recipe ingredients into an array i can pop away
    const ingredientsNeeded = [...recipe.ingredients]
    this.pantryItems.filter(item => item.inPantry).map(item => {
      item.aliasList?.map(alias => {
        if (ingredientsNeeded.includes(alias)) {
          ingredientsNeeded.splice(ingredientsNeeded.indexOf(alias), 1)
        } else {

        }
      })
    })

    return ingredientsNeeded.length ? false : true
  }
}
