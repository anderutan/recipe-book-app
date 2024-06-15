import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';

type Props = {
  prepTime: string;
  cookTime: string;
  serves: string;
};

const RecipeInfo = ({ prepTime, cookTime, serves }: Props) => {
  return (
    <div className='grid grid-cols-2 gap-6 mb-10 md:grid-cols-1 px-5'>
      <div className='flex gap-5'>
        <div>
          <LocalDiningOutlinedIcon color='disabled' />
        </div>
        <div className='flex flex-col'>
          <p className='font-semibold tracking-widest text-[#5C5C5C]/50 text-sm mb-2 md:text-base'>
            PREP
          </p>
          <p className='text-lg leading-6 md:text-lg'>{prepTime} minutes</p>
        </div>
      </div>
      <div className='flex gap-5'>
        <div>
          <AccessTimeIcon color='disabled' />
        </div>
        <div className='flex flex-col'>
          <p className='font-semibold tracking-widest text-[#5C5C5C]/50 text-sm mb-2 md:text-base'>
            COOK
          </p>
          <p className='text-lg leading-6 md:text-lg'>{cookTime} minutes</p>
        </div>
      </div>
      <div className='flex gap-5'>
        <div>
          <PeopleIcon color='disabled' />
        </div>
        <div className='flex flex-col'>
          <p className='font-semibold tracking-widest text-[#5C5C5C]/50 text-sm mb-2 md:text-base'>
            SERVES
          </p>
          <p className='text-lg leading-6 md:text-lg'>{serves} people</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
