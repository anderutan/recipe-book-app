import { Route, Routes } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import Home from './page/Home';
import Recipe from './page/Recipe';
import NewRecipe from './page/NewRecipe';
import NotFound from './page/NotFound';
import EditRecipe from './page/EditRecipe';
import { NotificationProvider } from './context/NotificationContext';

function App() {
  return (
    <RecipeProvider>
      <NotificationProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/recipe/:id' element={<Recipe />} />
          <Route path='/recipe/:id/edit' element={<EditRecipe />} />
          <Route path='/newrecipe' element={<NewRecipe />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </NotificationProvider>
    </RecipeProvider>
  );
}

export default App;
