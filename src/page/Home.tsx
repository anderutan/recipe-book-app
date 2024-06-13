import { useContext, useEffect } from 'react';
import { fetchRecipe } from '../utils/actions';
import RecipeCard from '../components/RecipeCard';
import { RecipeContext } from '../context/RecipeContext';
import CircularLoading from '../components/CircularLoading';

const Home = () => {
  const { state, dispatch } = useContext(RecipeContext);

  useEffect(() => {
    fetchRecipe(dispatch);
  }, [dispatch]);

  const { recipes, loading, error } = state;

  return (
    <main className='w-full h-screen flex flex-col gap-5 items-center py-10'>
      <h1>My Recipe Book</h1>
      {loading && <CircularLoading />}
      {error && <p>{error}</p>}
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </main>
  );
};

export default Home;
