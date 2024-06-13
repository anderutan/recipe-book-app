import { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { deleteRecipeData, fetchSpecificRecipe } from '../utils/actions';
import CircularLoading from '../components/CircularLoading';
import RecipeInfo from '../components/RecipeInfo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Recipe = () => {
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
        <article>
          <Link to='/'>
            <ArrowBackIcon />
          </Link>
          <h1>{currentRecipe.title}</h1>
          <p>{currentRecipe.description}</p>
          <div>
            <a href='#recipe' className='px-5 py-3 border-2'>
              Jump to recipe
            </a>
            <a href={currentRecipe.video}>Watch video</a>
          </div>
          <RecipeInfo
            prepTime={currentRecipe.prepTime}
            cookTime={currentRecipe.cookTime}
            serves={currentRecipe.serves}
          />
          <img src={currentRecipe.img} alt={currentRecipe.title} />
          <div>
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
      )}
    </>
  );
};

export default Recipe;
