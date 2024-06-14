import { ChangeEvent, useContext, useEffect } from 'react';
import { fetchRecipe } from '../utils/actions';
import RecipeCard from '../components/RecipeCard';
import { RecipeContext } from '../context/RecipeContext';
import CircularLoading from '../components/CircularLoading';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('name') || '';
  const { state, dispatch } = useContext(RecipeContext);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
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
    <main className='w-full h-full min-h-screen max-w-screen-lg mx-auto flex flex-col gap-5 items-center px-5 pt-10 pb-20 relative'>
      <h1 className='font-lora text-4xl font-semibold mb-2 sm:text-5xl sm:mb-5'>
        My Recipe Book
      </h1>
      <div className='flex w-full  items-center space-x-2 max-sm:fixed max-sm:bottom-5 max-sm:px-5 max-sm:max-w-[400px]'>
        <Input
          type='text'
          value={searchTerm}
          onChange={handleSearch}
          placeholder='Search recipes...'
          className='border border-slate-400'
        />
        <Link to='/newrecipe'>
          <Button type='submit' className='px-5'>
            Create Recipe
          </Button>
        </Link>
      </div>
      {loading && <CircularLoading />}
      {error && <p>{error}</p>}
      {filteredRecipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </main>
  );
};

export default Home;
