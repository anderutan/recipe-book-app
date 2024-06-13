import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Recipe from './page/Recipe';
import EditRecipe from './page/EditRecipe';
import NotFound from './page/NotFound';
import { RecipeProvider } from './context/RecipeContext';

function App() {
  return (
    <RecipeProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/recipe/:id' element={<Recipe />} />
        <Route path='/newrecipe' element={<EditRecipe />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </RecipeProvider>
  );
}

export default App;
