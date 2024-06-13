import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import { Action, RecipeState } from '../utils/type';
import { initialState, recipeReducer } from '../utils/reducer';

interface RecipeProviderProps {
  children: ReactNode;
}

const RecipeContext = createContext<{
  state: RecipeState;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const RecipeProvider = ({ children }: RecipeProviderProps) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeContext, RecipeProvider };
