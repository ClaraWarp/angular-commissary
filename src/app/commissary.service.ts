import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PantryItem } from './pantryItem'
import { Recipe } from './recipe';
import { Observable, of } from 'rxjs';
import { CalorieLog } from './calorieLog';

@Injectable({
  providedIn: 'root'
})
export class CommissaryService {
  url: string = 'http://localhost:1998'

  constructor(private http: HttpClient) { }

  changeLogCalories(tarRecipe: Recipe, currLog: CalorieLog, newSrc: string): Observable<Object> {
    const newLogArray = tarRecipe.log.map(log => {
      if (log.logName === currLog.logName && log.date === currLog.date) {
        return {
          ...log,
          logCalories: newSrc
        };
      } else {
        return log;
      }
    });
    const updatedRecipe = {
      ...tarRecipe,
      log: newLogArray
    };
    return this.http.put<Recipe>(this.url + `/recipes/${updatedRecipe.id}`, updatedRecipe);
  }

  changePantryImage(pantryItem: PantryItem, newSrc: string): Observable<PantryItem> {
    let targetObj
    if (pantryItem.product) {
      targetObj = {
        product: {
          ...pantryItem.product,
          imageUrl: newSrc
        }
      }
    } else {
      targetObj = {
        custom: {
          ...pantryItem.custom,
          imageUrl: newSrc
        }
      }
    }
    const newObj = {
      ...pantryItem,
      ...targetObj,
    };
    return this.http.put<PantryItem>(this.url + `/pantry/${newObj.id}`, newObj)
  }

  getPantry(): Observable<PantryItem[]> {
    return this.http.get<PantryItem[]>(this.url + '/pantry')
  }

  addPantryItem(pantryItem: PantryItem): Observable<PantryItem> {
    const targetObj = {
      inPantry: true,
      aliasList: []
    }
    const newObj = Object.assign(targetObj, pantryItem)
    return this.http.post<PantryItem>(this.url + '/pantry', newObj)
  }

  putPantryItemInPantry(pantryItem: PantryItem): Observable<PantryItem> {
    const targetObj = {
      inPantry: true
    }
    const newObj = Object.assign(pantryItem, targetObj)
    return this.http.put<PantryItem>(this.url + `/pantry/${newObj.id}`, newObj)
  }

  unstockPantryItem(pantryItem: PantryItem): Observable<PantryItem> {
    const targetObj = {
      inPantry: false
    }
    const newObj = Object.assign(pantryItem, targetObj)
    return this.http.put<PantryItem>(this.url + `/pantry/${newObj.id}`, newObj)
  }

  deleteItem(id: number): Observable<Object> {
    return this.http.delete(this.url + `/pantry/${id}`)
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url + '/recipes');
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.url + '/recipes', recipe);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(this.url + `/recipes/${recipe.id}`, recipe)
  }
}
