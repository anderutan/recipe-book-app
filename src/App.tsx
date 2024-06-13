import { Route, Routes } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import Home from './page/Home';
import Recipe from './page/Recipe';
import NewRecipe from './page/NewRecipe';
import NotFound from './page/NotFound';
import EditRecipe from './page/EditRecipe';

function App() {
  return (
    <RecipeProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/recipe/:id' element={<Recipe />} />
        <Route path='/recipe/:id/edit' element={<EditRecipe />} />
        <Route path='/newrecipe' element={<NewRecipe />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </RecipeProvider>
  );
}

export default App;
