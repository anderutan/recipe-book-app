import { useForm, SubmitHandler } from 'react-hook-form';
import { type UpdateRecipeType } from '../utils/type';
import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { createRecipe } from '../utils/actions';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const NewRecipe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateRecipeType>();

  const { dispatch } = useContext(RecipeContext);

  const navigate = useNavigate();

  const handleCreateRecipe = (data: UpdateRecipeType) => {
    createRecipe(dispatch, data);
  };

  const onSubmit: SubmitHandler<UpdateRecipeType> = (data) => {
    console.log(data);
    // handleCreateRecipe(data);
    // navigate('/');
  };

  const labelErrorClass = 'mb-0';
  const titleErrorClass = 'font-bold text-red-400';
  const inputErrorClass = 'ring-1 ring-red-400 text-red-400';
  const ErrorMessage = ({ message }: { message: string }) => {
    return (
      <span className='text-xs sm:text-base capitalize text-red-400 mb-1'>
        {message}
      </span>
    );
  };

  return (
    <section className='w-full h-full min-h-screen max-w-screen-sm mx-auto py-10 px-6 bg-slate-200 rounded-lg my-10'>
      <h2 className='font-lora text-4xl font-semibold mb-5 text-center sm:text-5xl'>
        Create New Recipe
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <Label htmlFor='title' className={errors.title && labelErrorClass}>
          <p className={errors.title && titleErrorClass}>Title</p>
        </Label>
        {errors.title && <ErrorMessage message={'Please name your recipe'} />}
        <Input
          type='text'
          placeholder='Please state the recipe name'
          {...register('title', { required: true })}
          className={errors.title && inputErrorClass}
          id='title'
        />

        <Label
          htmlFor='description'
          className={errors.description && labelErrorClass}
        >
          <p className={errors.description && titleErrorClass}>Description</p>
        </Label>
        {errors.description && (
          <ErrorMessage
            message={'Please give your recipe a short description'}
          />
        )}
        <Textarea
          {...register('description', { required: true })}
          placeholder='Please state the recipe description'
          className={errors.description && inputErrorClass}
          id='description'
        />

        <Label htmlFor='video' className={errors.video && labelErrorClass}>
          <p className={errors.video && titleErrorClass}>Video Link</p>
        </Label>
        {errors.video && (
          <ErrorMessage message={'Please provide recipe video link'} />
        )}
        <Input
          type='text'
          placeholder='Video link'
          {...register('video', { required: true })}
          className={errors.video && inputErrorClass}
          id='video'
        />

        <Label htmlFor='image' className={errors.img && labelErrorClass}>
          <p className={errors.img && titleErrorClass}>Image Link</p>
        </Label>
        {errors.img && (
          <ErrorMessage message={'Please provide recipe image link'} />
        )}
        <Input
          type='text'
          placeholder='Image link'
          {...register('img', { required: true })}
          className={errors.img && inputErrorClass}
          id='image'
        />

        <section className='grid grid-cols-2 gap-5 mb-5 sm:grid-cols-3 items-center'>
          <div>
            <Label htmlFor='prepareTime'>
              <p className='mb-2'>
                Prepare Time{' '}
                <span className='text-xs sm:text-base lowercase'>
                  (Minutes)
                </span>
              </p>
            </Label>
            <select
              {...register('prepTime', { required: true })}
              id='prepareTime'
              className='px-6 py-3 w-full sm:text-lg'
            >
              <option value='0-15'>0 - 15</option>
              <option value='16-30'>16 - 30</option>
              <option value='31-45'>31 - 45</option>
              <option value='46-60'>46 - 60</option>
            </select>
          </div>

          <div>
            <Label htmlFor='cookTime'>
              <p className='mb-2'>
                Cook Time{' '}
                <span className='text-xs sm:text-base lowercase'>
                  (Minutes)
                </span>
              </p>
            </Label>
            <select
              {...register('cookTime', { required: true })}
              id='cookTime'
              className='px-6 py-3 w-full sm:text-lg'
            >
              <option value='0-15'>0 - 15</option>
              <option value='16-30'>16 - 30</option>
              <option value='31-45'>31 - 45</option>
              <option value='46-60'>46 - 60</option>
            </select>
          </div>

          <div>
            <Label htmlFor='serves'>
              <p className='mb-2'>
                Serves{' '}
                <span className='text-xs sm:text-base lowercase'>
                  (No of People)
                </span>
              </p>
            </Label>
            <select
              {...register('serves', { required: true })}
              id='serves'
              className='px-6 py-3 w-full sm:text-lg'
            >
              <option value='1-2'>1 - 2</option>
              <option value='3-4'>3 - 4</option>
              <option value='5-6'>5 - 6</option>
              <option value='6+'>6+</option>
            </select>
          </div>
        </section>

        <Label
          htmlFor='ingredients'
          className={errors.ingredients && labelErrorClass}
        >
          <p className={errors.ingredients && titleErrorClass}>
            Ingredients{' '}
            <span className='text-xs sm:text-base lowercase'>
              (Enter ingredients separate by ;)
            </span>
          </p>
        </Label>
        {errors.ingredients && (
          <ErrorMessage message={'Please list down the ingredients'} />
        )}
        <Textarea
          placeholder='Ingredients list and seperate by ;'
          {...register('ingredients', { required: true })}
          id='ingredients'
          className={errors.ingredients && inputErrorClass}
        />

        <Label
          htmlFor='instructions'
          className={errors.instructions && labelErrorClass}
        >
          <p className={errors.instructions && titleErrorClass}>
            Instructions{' '}
            <span className='text-xs sm:text-base lowercase'>
              (Enter instructions separate by ;)
            </span>
          </p>
        </Label>
        {errors.instructions && (
          <ErrorMessage message={'Please list down the instructions'} />
        )}
        <Textarea
          placeholder='Instructions step and seperate by ;'
          {...register('instructions', { required: true })}
          id='instructions'
          className={errors.instructions && inputErrorClass}
        />

        <div className='flex justify-center gap-5'>
          <Link to='/'>
            <Button variant='destructive' size='xl'>
              Cancel
            </Button>
          </Link>
          <Button type='submit' size='xl'>
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default NewRecipe;
