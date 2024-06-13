export type Action =
  | { type: 'FETCH_RECIPES_REQUEST' }
  | { type: 'FETCH_RECIPES_SUCCESS'; payload: RecipeDataState[] }
  | { type: 'FETCH_SPECIFIC_RECIPES_SUCCESS'; payload: RecipeDataState }
  | { type: 'FETCH_RECIPES_FAILURE'; payload: string }
  | { type: 'CREATE_RECIPES_SUCCESS'; payload: RecipeDataState }
  | { type: 'UPDATE_RECIPES_SUCCESS'; payload: RecipeDataState }
  | { type: 'DELETE_RECIPES_SUCCESS'; payload: string };

export interface RecipeDataState {
  id: string;
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

export interface UpdateRecipeType {
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

export interface RecipeState {
  recipes: RecipeDataState[];
  currentRecipe: RecipeDataState | null;
  loading: boolean;
  error: string | null;
}
