import {
  getRecipes,
  getSpecificRecipe,
  createNewRecipe,
  updateRecipe,
  deleteRecipe,
} from '../api/api';
import { Dispatch } from 'react';
import { type Action, RecipeDataState, UpdateRecipeType } from './type';

export const fetchRecipe = async (dispatch: Dispatch<Action>) => {
  dispatch({ type: 'FETCH_RECIPES_REQUEST' });
  try {
    const recipes = await getRecipes();
    dispatch({
      type: 'FETCH_RECIPES_SUCCESS',
      payload: recipes as RecipeDataState[],
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_RECIPES_FAILURE',
      payload: (error as Error).message,
    });
  }
};

export const fetchSpecificRecipe = async (
  dispatch: Dispatch<Action>,
  id: string
) => {
  dispatch({ type: 'FETCH_RECIPES_REQUEST' });
  try {
    const recipe = await getSpecificRecipe(id);
    dispatch({
      type: 'FETCH_SPECIFIC_RECIPES_SUCCESS',
      payload: recipe as RecipeDataState,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_RECIPES_FAILURE',
      payload: (error as Error).message,
    });
  }
};

export const createRecipe = async (
  dispatch: Dispatch<Action>,
  data: UpdateRecipeType
) => {
  try {
    const newRecipe = await createNewRecipe(data);
    dispatch({
      type: 'CREATE_RECIPES_SUCCESS',
      payload: newRecipe as RecipeDataState,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateRecipeData = async (
  dispatch: Dispatch<Action>,
  id: string,
  data: UpdateRecipeType
) => {
  try {
    const updatedRecipe = await updateRecipe(id, data);
    dispatch({
      type: 'UPDATE_RECIPES_SUCCESS',
      payload: updatedRecipe as RecipeDataState,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteRecipeData = async (
  dispatch: Dispatch<Action>,
  id: string
) => {
  try {
    await deleteRecipe(id);
    dispatch({ type: 'DELETE_RECIPES_SUCCESS', payload: id });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
