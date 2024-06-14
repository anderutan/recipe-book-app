import { FC, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FormFieldProps {
  name: string;
  label: string;
  span?: string;
  placeholder?: string;
  children?: ReactNode;
  as?: 'input' | 'textarea' | 'select';
  errorMsg?: string;
}

const ErrorMessage = ({ message }: { message: string }) => (
  <span className='text-xs sm:text-base capitalize text-red-400 mb-1'>
    {message}
  </span>
);

const FormField: FC<FormFieldProps> = ({
  name,
  label,
  span,
  placeholder,
  children,
  as = 'input',
  errorMsg,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];
  const inputClass = error ? 'ring-1 ring-red-400 text-red-400' : '';

  const inputProps = {
    ...register(name, { required: true }),
    placeholder,
    id: name,
    className: inputClass,
  };

  return (
    <div className='mb-4'>
      <Label htmlFor={name}>
        <p className={error ? 'font-bold text-red-400' : ''}>
          {label} <span className='text-xs sm:text-base lowercase'>{span}</span>
        </p>
      </Label>
      {error && <ErrorMessage message={errorMsg || 'This field is required'} />}
      {as === 'input' && <Input {...inputProps} />}
      {as === 'textarea' && <Textarea {...inputProps} />}
      {as === 'select' && (
        <select {...inputProps} className={`px-6 py-3 ${inputClass}`}>
          {children}
        </select>
      )}
    </div>
  );
};

export default FormField;
