import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='w-screen h-screen bg-yellow-50 flex flex-col justify-center items-center gap-5'>
      <h1 className='text-6xl font-bold'>404</h1>
      <p className='text-xl font-medium'>Sorry, we couldn't find that page!</p>
      <Link to='/' className='text-blue-500 font-bold hover:text-violet-500'>
        Click here back to our HOME page
      </Link>{' '}
    </section>
  );
};

export default NotFound;
