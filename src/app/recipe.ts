import { CalorieLog } from "./calorieLog";
import { PantryItem } from "./pantryItem";

export interface Recipe {
    name: string;
    description?: string;
    ingredients: PantryItem[];
    log: CalorieLog[];
    id?: number;
}