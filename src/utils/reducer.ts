import { type Action, RecipeDataState } from './type';

interface RecipeState {
  recipes: RecipeDataState[];
  currentRecipe: RecipeDataState | null;
  loading: boolean;
  error: string | null;
}

const initialState: RecipeState = {
  recipes: [],
  currentRecipe: null,
  loading: false,
  error: null,
};

const recipeReducer = (state: RecipeState, action: Action): RecipeState => {
  switch (action.type) {
    case 'FETCH_RECIPES_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_RECIPES_SUCCESS':
      return { ...state, loading: false, recipes: action.payload };
    case 'FETCH_SPECIFIC_RECIPES_SUCCESS':
      return { ...state, loading: false, currentRecipe: action.payload };
    case 'FETCH_RECIPES_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_RECIPES_SUCCESS':
      return { ...state, recipes: [action.payload, ...state.recipes] };
    case 'UPDATE_RECIPES_SUCCESS':
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.id ? action.payload : recipe
        ),
      };
    case 'DELETE_RECIPES_SUCCESS':
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };
    default:
      return state;
  }
};

export { recipeReducer, initialState };
