import { RecipeInsert, recipeTable } from "../schema/recipes";
import { type dbSqlite } from "../db";

export function insertRecipe(db: ReturnType<typeof dbSqlite>, recipe: RecipeInsert) {
  return db.insert(recipeTable).values(recipe);
}

export function getAllRecipes(db: ReturnType<typeof dbSqlite>) {
  return db.select().from(recipeTable).all();
}
