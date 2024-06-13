import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { fetchSpecificRecipe } from '../utils/actions';
import CircularLoading from '../components/CircularLoading';

const Recipe = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(RecipeContext);

  useEffect(() => {
    id && fetchSpecificRecipe(dispatch, id);
  }, [id, dispatch]);

  const { currentRecipe, loading, error } = state;

  return (
    <>
      {loading && <CircularLoading />}
      {error && <p>{error}</p>}
      <article>
        <p>{currentRecipe?.title}</p>
      </article>
    </>
  );
};

export default Recipe;
