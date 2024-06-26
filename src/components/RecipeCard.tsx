import { Link } from 'react-router-dom';
import { type RecipeDataState } from '../utils/type';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import useWindowDimensions from '@/utils/useWindowDimensions';

type Props = {
  recipe: RecipeDataState;
};

const RecipeCard = ({ recipe }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <Card className='max-w-[400px] w-full shadow-lg sm:max-w-screen-lg sm:flex sm:items-center'>
      <CardHeader>
        <img
          src={recipe.img}
          alt={recipe.title}
          className='rounded-2xl'
          style={
            width < 641
              ? { height: '200px', width: '400px', objectFit: 'cover' }
              : { height: '350px', width: '520px', objectFit: 'cover' }
          }
        />
      </CardHeader>
      <div className='sm:max-w-[350px] sm:pl-5'>
        <CardContent>
          <CardTitle className='font-lora text-3xl tracking-wide font-semibold mb-2 sm:text-4xl'>
            {recipe.title}
          </CardTitle>
          <CardDescription className='text-base sm:text-xl'>
            {recipe.description.substring(0, 120) + '...'}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Link to={`/recipe/${recipe.id}`}>
            {/* update outline button design */}
            <Button variant='outline' size='lg'>
              View recipe
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default RecipeCard;
