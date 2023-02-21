import { Component, OnInit } from '@angular/core';
import { CalorieLog } from 'src/app/calorieLog';
import { CommissaryService } from 'src/app/commissary.service';
import { Recipe } from 'src/app/recipe';

@Component({
  selector: 'app-log-well',
  templateUrl: './log-well.component.html',
  styleUrls: ['./log-well.component.css'],
})
export class LogWellComponent implements OnInit {
  recipeLogs: CalorieLog[] = [];
  recipes: Recipe[] = [];
  todayCalories: number = 0

  constructor(private commissaryService: CommissaryService) {}

  ngOnInit(): void {
    this.getLogs();
    this.getRecipes();
  }

  getRecipes(): void {
    this.commissaryService
      .getRecipes()
      .subscribe((recipes) => (this.recipes = recipes));
  }

  adjustLogCalorie(currLog: CalorieLog): void {
    if (prompt('type "ok" to change the calories here') == 'ok') {
      let newSrc = prompt('please enter new calories');
      let tarRecipe = this.recipes.filter((recipe) => {
        console.log(
          'flag is made, starts false, should empty the array except for the one'
        );
        let flag = false;
        recipe.log.forEach((log) => {
          if (log.date == currLog.date && log.logName == currLog.logName) {
            flag = true;
          }
          return;
        });
        console.log(
          'the curr recipes logs have been checked, and the flag is ' + flag
        );
        return flag;
      })[0];
      newSrc &&
        tarRecipe &&
        this.commissaryService
          .changeLogCalories(tarRecipe, currLog, newSrc)
          .subscribe();
    }
  }

  getLogs(): void {
    this.commissaryService.getRecipes().subscribe(
      (recipes) =>
        (this.recipeLogs = recipes
          .flatMap((recipe) => {
            const recipeLog = Array.isArray(recipe.log) ? recipe.log : [];
            return recipeLog.map((log) => {
              // condition if log is from today it will add to the totalCalories var
              let now = new Date()
              let logDate = new Date(log.date)
              if (now.getDate() == logDate.getDate()) {
                this.todayCalories += Number(log.logCalories)
              }
              return log
            });
          })
          .sort((a, b) => {
            return a.date < b.date ? 1 : -1;
          }))
    );
  }
}
