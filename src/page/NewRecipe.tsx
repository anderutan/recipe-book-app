import { useForm, SubmitHandler } from 'react-hook-form';
import { type UpdateRecipeType } from '../utils/type';
import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { createRecipe } from '../utils/actions';
import { Link, useNavigate } from 'react-router-dom';

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
    handleCreateRecipe(data);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
      <label htmlFor='title'>
        <p>Title</p>
        {errors.title && <span>This field is required</span>}
        <input
          type='text'
          placeholder='Please state the recipe name'
          {...register('title', { required: true })}
          className='border-2'
          id='title'
        />
      </label>

      <label htmlFor='description'>
        <p>Description</p>
        {errors.description && <span>This field is required</span>}
        <textarea
          {...register('description', { required: true })}
          className='border-2'
          id='description'
        />
      </label>

      <label htmlFor='video'>
        <p>Video (link)</p>
        {errors.video && <span>This field is required</span>}
        <input
          type='text'
          placeholder='video'
          {...register('video', { required: true })}
          className='border-2'
          id='video'
        />
      </label>

      <label htmlFor='image'>
        <p>Image (link)</p>
        {errors.img && <span>This field is required</span>}
        <input
          type='text'
          placeholder='img'
          {...register('img', { required: true })}
          className='border-2'
          id='image'
        />
      </label>

      <div>
        <label htmlFor='prepareTime'>
          <p>Prepare Time (link)</p>
          {errors.prepTime && <span>This field is required</span>}
          <select
            {...register('prepTime', { required: true })}
            id='prepareTime'
          >
            <option value='0-15'>0-15</option>
            <option value='16-30'>16-30</option>
            <option value='31-45'>31-45</option>
            <option value='46-60'>46-60</option>
          </select>
        </label>

        <label htmlFor='cookTime'>
          <p>Cook Time (link)</p>
          {errors.cookTime && <span>This field is required</span>}
          <select {...register('cookTime', { required: true })} id='cookTime'>
            <option value='0-15'>0-15</option>
            <option value='16-30'>16-30</option>
            <option value='31-45'>31-45</option>
            <option value='46-60'>46-60</option>
          </select>
        </label>

        <label htmlFor='serves'>
          <p>Serves</p>
          {errors.serves && <span>This field is required</span>}
          <select {...register('serves', { required: true })} id='serves'>
            <option value='1-2'>1-2</option>
            <option value='3-4'>3-4</option>
            <option value='5-6'>5-6</option>
            <option value='6+'>6+</option>
          </select>
        </label>
      </div>

      <label htmlFor='ingredients'>
        <p>Ingredients (Enter ingredients separate by ;)</p>
        {errors.ingredients && <span>This field is required</span>}
        <textarea
          placeholder='ingredients'
          {...register('ingredients', { required: true })}
          id='ingredients'
        />
      </label>

      <label htmlFor='instructions'>
        <p>Instructions (Enter instructions separate by ;)</p>
        {errors.instructions && <span>This field is required</span>}
        <textarea
          placeholder='instructions'
          {...register('instructions', { required: true })}
          id='instructions'
        />
      </label>

      <div>
        <Link to='/'>Cancel</Link>
        <input type='submit' />
      </div>
    </form>
  );
};

export default NewRecipe;
