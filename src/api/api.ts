import database from './database';
import { v4 as uuidv4 } from 'uuid';

interface UpdateRecipeType {
  title: string;
  description: string;
  video: string;
  img: string;
  prepTime: '0-15' | '16-30' | '31-45' | '46-60';
  cookTime: '0-15' | '16-30' | '31-45' | '46-60';
  serves: '1-2' | '3-4' | '5-6' | '6+';
  ingredients: string;
  instructions: string;
}

export const getRecipes = () =>
  new Promise((resolve, reject) => {
    if (!database) {
      setTimeout(() => {
        reject(new Error('Database not found'));
      }, 250);
    }
    setTimeout(() => {
      resolve(database);
    }, 250);
  });

export const getSpecificRecipe = (id: string) =>
  new Promise((resolve, reject) => {
    const recipe = database.find((rec) => rec.id === id);

    if (!recipe) {
      return setTimeout(() => {
        reject(new Error('Recipe not found'));
      }, 250);
    }
    setTimeout(() => {
      resolve(recipe);
    }, 250);
  });

export const createNewRecipe = (data: UpdateRecipeType) =>
  new Promise((resolve, reject) => {
    if (!data) {
      reject(new Error('Not all information provided'));
    }
    const id = uuidv4();
    const newRecipe = { id, ...data };
    database.unshift(newRecipe);

    setTimeout(() => {
      resolve(true);
    }, 250);
  });

export const updateRecipe = (id: string, data: UpdateRecipeType) =>
  new Promise((resolve, reject) => {
    const recipeIndex = database.findIndex((recipe) => recipe.id === id);
    if (recipeIndex === -1) {
      return setTimeout(() => {
        reject(new Error('Recipe not found'));
      }, 250);
    }

    const updateRecipe = { ...database[recipeIndex], ...data };
    database[recipeIndex] = updateRecipe;

    return setTimeout(() => {
      resolve(true);
    }, 250);
  });
