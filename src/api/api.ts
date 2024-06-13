import database from './database';
import { v4 as uuidv4 } from 'uuid';
import { type UpdateRecipeType } from '../utils/type';

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
    const specificRecipe = database.find((recipe) => recipe.id === id);

    if (!specificRecipe) {
      return setTimeout(() => {
        reject(new Error('Recipe not found'));
      }, 250);
    }
    setTimeout(() => {
      resolve(specificRecipe);
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
      resolve(newRecipe);
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

export const deleteRecipe = (id: string) =>
  new Promise((resolve, reject) => {
    const recipeIndex = database.findIndex((recipe) => recipe.id === id);
    if (recipeIndex === -1) {
      return setTimeout(() => {
        reject(new Error('Recipe not found'));
      }, 250);
    }
    database.splice(recipeIndex, 1);

    setTimeout(() => {
      resolve(true);
    }, 250);
  });
