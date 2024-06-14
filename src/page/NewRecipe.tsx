import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { type UpdateRecipeType } from '../utils/type';
import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { createRecipe } from '../utils/actions';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FormField from '../components/FormField';

const NewRecipe = () => {
  const methods = useForm<UpdateRecipeType>();

  const { dispatch } = useContext(RecipeContext);
  const navigate = useNavigate();

  const handleCreateRecipe = (data: UpdateRecipeType) => {
    createRecipe(dispatch, data);
  };

  const onSubmit: SubmitHandler<UpdateRecipeType> = (data) => {
    handleCreateRecipe(data);
    navigate('/');
  };

  return (
    <section className='w-full h-full min-h-screen max-w-screen-sm mx-auto py-10 px-6 bg-slate-200 rounded-lg my-10'>
      <h2 className='font-lora text-4xl font-semibold mb-5 text-center sm:text-5xl'>
        Create New Recipe
      </h2>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className='flex flex-col'
        >
          <FormField
            name='title'
            label='Title'
            placeholder='Please state the recipe name'
            as='input'
            errorMsg='Please name your recipe'
          />
          <FormField
            name='description'
            label='Description'
            placeholder='Please state the recipe description'
            as='textarea'
            errorMsg='Please give your recipe a short description'
          />
          <FormField
            name='video'
            label='Video Link'
            placeholder='Video link'
            as='input'
            errorMsg='Please provide recipe video link'
          />
          <FormField
            name='img'
            label='Image Link'
            placeholder='Image link'
            as='input'
            errorMsg='Please provide recipe image link'
          />
          <div className='grid grid-cols-2 gap-5 mb-5 sm:grid-cols-3 items-center'>
            <FormField
              name='prepTime'
              label='Prepare Time'
              span='(Minutes)'
              as='select'
            >
              <option value='0-15'>0 - 15</option>
              <option value='16-30'>16 - 30</option>
              <option value='31-45'>31 - 45</option>
              <option value='46-60'>46 - 60</option>
            </FormField>
            <FormField
              name='cookTime'
              label='Cook Time'
              span='(Minutes)'
              as='select'
            >
              <option value='0-15'>0 - 15</option>
              <option value='16-30'>16 - 30</option>
              <option value='31-45'>31 - 45</option>
              <option value='46-60'>46 - 60</option>
            </FormField>
            <FormField
              name='serves'
              label='Serves'
              span='(No of People)'
              as='select'
            >
              <option value='1-2'>1 - 2</option>
              <option value='3-4'>3 - 4</option>
              <option value='5-6'>5 - 6</option>
              <option value='6+'>6+</option>
            </FormField>
          </div>
          <FormField
            name='ingredients'
            label='Ingredients'
            span='(Enter ingredients separate by ;)'
            placeholder='Ingredients list and separate by ;'
            as='textarea'
            errorMsg='Please list down the ingredients'
          />
          <FormField
            name='instructions'
            label='Instructions'
            span='(Enter instructions separate by ;)'
            placeholder='Instructions step and separate by ;'
            as='textarea'
            errorMsg='Please list down the instructions'
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
      </FormProvider>
    </section>
  );
};

export default NewRecipe;
