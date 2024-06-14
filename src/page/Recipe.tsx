import { useContext, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { deleteRecipeData, fetchSpecificRecipe } from '../utils/actions';
import CircularLoading from '../components/CircularLoading';
import RecipeInfo from '../components/RecipeInfo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@/components/ui/button';

const Recipe = () => {
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
          <article className='px-10 py-20 relative'>
            <Link to='/' className='absolute top-5 left-5'>
              <ArrowBackIcon sx={{ width: '35px', height: '35px' }} />
            </Link>
            <h1 className='font-lora text-5xl font-semibold mb-5'>
              {currentRecipe.title}
            </h1>
            <p className='mb-10'>{currentRecipe.description}</p>
            <div className='mb-10'>
              <Button
                className='mr-5 mb-5'
                variant='outline'
                size='lg'
                onClick={() => {
                  recipeRef.current?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                Jump to recipe
              </Button>
              <a href={currentRecipe.video} target='_blank'>
                <Button variant='link'>Watch video</Button>
              </a>
            </div>
            <RecipeInfo
              prepTime={currentRecipe.prepTime}
              cookTime={currentRecipe.cookTime}
              serves={currentRecipe.serves}
            />
            <img src={currentRecipe.img} alt={currentRecipe.title} />
            <div ref={recipeRef}>
              <p>Ingredients</p>
              <ul>
                {currentRecipe.ingredients.split('; ').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>Instructions</p>
              <ol>
                {currentRecipe.instructions.split('; ').map((item, index) => (
                  <li key={index}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <button onClick={handleEdit}>Edit Recipe</button>
              <button onClick={handleDelete}>Delete Recipe</button>
            </div>
          </article>
        </>
      )}
    </>
  );
};

export default Recipe;
