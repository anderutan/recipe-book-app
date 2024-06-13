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
    <section className='grid grid-cols-2 gap-3'>
      <div className='flex'>
        <div>
          <LocalDiningOutlinedIcon />
        </div>
        <div className='flex flex-col'>
          <p>PREP</p>
          <p>{prepTime} minutes</p>
        </div>
      </div>
      <div className='flex'>
        <div>
          <AccessTimeIcon />
        </div>
        <div className='flex flex-col'>
          <p>COOK</p>
          <p>{cookTime} minutes</p>
        </div>
      </div>
      <div className='flex'>
        <div>
          <PeopleIcon />
        </div>
        <div className='flex flex-col'>
          <p>SERVES</p>
          <p>{serves} people</p>
        </div>
      </div>
    </section>
  );
};

export default RecipeInfo;
