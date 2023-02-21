import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavWellComponent } from './components/nav-well/nav-well.component';
import { AppRoutingModule } from './app-routing.module';
import { PantryWellComponent } from './components/pantry-well/pantry-well.component';
import { RecipeWellComponent } from './components/recipe-well/recipe-well.component';
import { ScanningWellComponent } from './components/scanning-well/scanning-well.component';
import { SortByFrequencyPipe } from './sort-by-frequency.pipe';
import { GroceryWellComponent } from './components/grocery-well/grocery-well.component';
import { LogWellComponent } from './components/log-well/log-well.component';
import { PantryItemCardComponent } from './components/pantry-item-card/pantry-item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavWellComponent,
    PantryWellComponent,
    RecipeWellComponent,
    ScanningWellComponent,
    SortByFrequencyPipe,
    GroceryWellComponent,
    LogWellComponent,
    PantryItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
