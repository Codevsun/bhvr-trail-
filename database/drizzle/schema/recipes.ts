
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const recipeTable = sqliteTable("recipes", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 50 }).notNull(),
  description: text("description", { length: 50 }).notNull(),
  ingredients: text("ingredients", { length: 50 }).notNull(),
  instructions: text("instructions", { length: 50 }).notNull(),
});

export type RecipeItem = typeof recipeTable.$inferSelect;
export type RecipeInsert = typeof recipeTable.$inferInsert;
 