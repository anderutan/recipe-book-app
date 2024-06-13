import { useContext, useEffect } from 'react';
import { fetchRecipe } from '../utils/actions';
import RecipeCard from '../components/RecipeCard';
import { RecipeContext } from '../context/RecipeContext';
import CircularLoading from '../components/CircularLoading';
import { Link, useSearchParams } from 'react-router-dom';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('name') || '';
  const { state, dispatch } = useContext(RecipeContext);

  const handleSearch = (event) => {
    const name = event.target.value;
    if (name) {
      setSearchParams({ name });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    fetchRecipe(dispatch);
  }, [dispatch]);

  const { recipes, loading, error } = state;

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className='w-full h-screen flex flex-col gap-5 items-center py-10 relative'>
      <h1>My Recipe Book</h1>
      {loading && <CircularLoading />}
      {error && <p>{error}</p>}
      {filteredRecipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
      <div>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearch}
          placeholder='Search recipes...'
          className='border-2'
        />
        <Link to='/newrecipe'>Create Recipe</Link>
      </div>
    </main>
  );
};

export default Home;
