import { useContext, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { deleteRecipeData, fetchSpecificRecipe } from '../utils/actions';
import CircularLoading from '../components/CircularLoading';
import RecipeInfo from '../components/RecipeInfo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@/components/ui/button';
import CheckboxList from '@/components/ui/CheckboxList';
import useWindowDimensions from '@/utils/useWindowDimensions';

const Recipe = () => {
  const { width } = useWindowDimensions();
  const recipeRef = useRef<HTMLDivElement | null>(null);
  const { id } = useParams();
  const { state, dispatch } = useContext(RecipeContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (id) {
      const success: boolean = await deleteRecipeData(dispatch, id);
      if (success) {
        navigate('/');
      }
    }
  };

  const handleEdit = () => {
    navigate(`/recipe/${id}/edit`);
  };

  useEffect(() => {
    id && fetchSpecificRecipe(dispatch, id);
  }, [dispatch, id]);

  const { currentRecipe, loading, error } = state;

  return (
    <>
      {loading && <CircularLoading />}
      {error && <p>{error}</p>}
      {currentRecipe && (
        <>
          <article className='w-full h-full min-h-screen max-w-screen-lg mx-auto px-5 py-20 sm:px-20 relative'>
            <Link to='/' className='absolute top-5 left-5 sm:left-10'>
              <ArrowBackIcon sx={{ width: '35px', height: '35px' }} />
            </Link>
            <div className='md:flex md:gap-10'>
              <div className='md:max-w-[70%]'>
                <h1 className='font-lora text-5xl font-semibold mb-5 md:text-6xl'>
                  {currentRecipe.title}
                </h1>
                <p className='mb-10 md:text-lg'>{currentRecipe.description}</p>
                <div className='mb-10 '>
                  <Button
                    className='mr-5 mb-5'
                    variant='outline'
                    size='xl'
                    onClick={() => {
                      recipeRef.current?.scrollIntoView({
                        behavior: 'smooth',
                      });
                    }}
                  >
                    Jump to recipe
                  </Button>
                  <a href={currentRecipe.video} target='_blank'>
                    <Button variant='link' size='xl'>
                      Watch video
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <RecipeInfo
                  prepTime={currentRecipe.prepTime}
                  cookTime={currentRecipe.cookTime}
                  serves={currentRecipe.serves}
                />
              </div>
            </div>
            <img
              src={currentRecipe.img}
              alt={currentRecipe.title}
              className='rounded-xl py-5'
              style={
                width > 640
                  ? { height: '350px', width: '100%', objectFit: 'cover' }
                  : {}
              }
            />
            <div ref={recipeRef} className='p-5'>
              <h3 className='text-2xl font-lora font-semibold mb-3 md:text-4xl'>
                Ingredients
              </h3>
              <CheckboxList items={currentRecipe.ingredients.split(';')} />
            </div>
            <div className='p-5'>
              <h3 className='text-2xl font-lora font-semibold mb-3 md:text-4xl'>
                Instructions
              </h3>
              <CheckboxList items={currentRecipe.instructions.split(';')} />
            </div>
            <div className='flex justify-center gap-10 py-10'>
              <Button onClick={handleEdit} size='xl'>
                Edit Recipe
              </Button>
              <Button onClick={handleDelete} variant='destructive' size='xl'>
                Delete Recipe
              </Button>
            </div>
          </article>
        </>
      )}
    </>
  );
};

export default Recipe;
