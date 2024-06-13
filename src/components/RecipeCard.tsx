import { Link } from 'react-router-dom';
import { type RecipeDataState } from '../utils/type';

type Props = {
  recipe: RecipeDataState;
};

const RecipeCard = ({ recipe }: Props) => {
  return (
    <div key={recipe.id}>
      <img src={recipe.img} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p className='mb-2'>{recipe.description.substring(0, 100) + '.....'}</p>
      <Link to={`/recipe/${recipe.id}`} className='px-5 py-2 border-2'>
        View recipe
      </Link>
    </div>
  );
};

export default RecipeCard;
