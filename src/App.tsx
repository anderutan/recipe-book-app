import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Recipe from './page/Recipe';
import EditRecipe from './page/EditRecipe';
import NotFound from './page/NotFound';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/:id' element={<Recipe />} />
      <Route path='/newrecipe' element={<EditRecipe />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
