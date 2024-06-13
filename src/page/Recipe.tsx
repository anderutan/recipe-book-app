import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { fetchSpecificRecipe } from '../utils/actions';
import CircularLoading from '../components/CircularLoading';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';

const Recipe = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(RecipeContext);

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
          <h1>{currentRecipe.title}</h1>
          <p>{currentRecipe.description}</p>
          <div>
            <button className='px-5 py-3 border-2'>Jump to recipe</button>
            <a href={currentRecipe.video}>Watch video</a>
          </div>
          <section className='grid grid-cols-2 gap-3'>
            <div className='flex'>
              <div>
                <LocalDiningOutlinedIcon />
              </div>
              <div className='flex flex-col'>
                <p>PREP</p>
                <p>{currentRecipe.prepTime} minutes</p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <AccessTimeIcon />
              </div>
              <div className='flex flex-col'>
                <p>COOK</p>
                <p>{currentRecipe.cookTime} minutes</p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <PeopleIcon />
              </div>
              <div className='flex flex-col'>
                <p>SERVES</p>
                <p>{currentRecipe.serves} people</p>
              </div>
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default Recipe;
