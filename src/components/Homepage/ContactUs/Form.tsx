import DoubleButton from '@/components/buttons/DoubleButton';
import { ContactUsFormErrors } from '@/lib/contactFormValidation';
import { ChangeEvent } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './styles/phoneInput.css';

export default function Form({
  formErrors,
  onChange,
  onSend
}: {
  formErrors: ContactUsFormErrors;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSend: () => void;
}) {
  return (
    <div className='flex w-full animate-appear flex-col items-center justify-center gap-5 rounded-3xl bg-gradient-to-br from-primary/30 p-5 py-14 caret-primary md:w-3/4 md:shadow-blblur md:shadow-primary/50 lg:w-3/6'>
      <div className='w-full text-center text-5xl'>Contact Us</div>
      <div className='flex w-full flex-col gap-5'>
        <div className='flex w-full flex-col gap-5 md:flex-row'>
          <div className='flex w-full flex-col md:w-1/2'>
            <input
              className={`${
                formErrors.fullName ? 'border-2 border-red-700' : ''
              } rounded-xl bg-primary/60 p-1 px-5 text-2xl placeholder:h-full placeholder:text-2xl placeholder:text-secondary/70 focus:border-primary focus:outline-none focus:ring-0`}
              placeholder='Full Name*'
              name='fullName'
              onChange={onChange}
            />
            <span className='px-2 text-lg text-red-700'>{formErrors.fullName}</span>
          </div>
          <div className='flex w-full flex-col md:w-1/2'>
            <input
              className={`${
                formErrors.email ? 'border-2 border-red-700' : ''
              } rounded-xl bg-primary/60 p-1 px-5 text-2xl placeholder:h-full placeholder:text-2xl placeholder:text-secondary/70 focus:border-primary focus:outline-none focus:ring-0`}
              placeholder='Email address*'
              type='email'
              name='email'
              onChange={onChange}
            />
            <span className='px-2 text-lg text-red-700'>{formErrors.email}</span>
          </div>
        </div>
        <div className='flex w-full flex-col gap-5 md:flex-row'>
          <div className='flex w-full flex-col md:w-1/2'>
            <PhoneInput
              inputClass='phone-input'
              buttonClass='phone-input-button'
              dropdownStyle={{ backgroundColor: 'rgba(var(--primary--rgb), 0.6)' }}
              onChange={(value) => {
                onChange({ target: { name: 'phone', value: value } } as unknown as ChangeEvent<
                  HTMLInputElement | HTMLTextAreaElement
                >);
              }}
              country={'ua'}
            />
            <span className='px-2 text-lg text-red-700'>{formErrors.phone}</span>
          </div>

          <div className='flex w-full flex-col md:w-1/2'>
            <input
              className={`${
                formErrors.company ? 'border-2 border-red-700' : ''
              } rounded-xl bg-primary/60 p-1 px-5 text-2xl placeholder:h-full placeholder:text-2xl placeholder:text-secondary/70 focus:border-primary focus:outline-none focus:ring-0`}
              placeholder='Company Name (optional)'
              name='company'
              onChange={onChange}
            />
            <span className='px-2 text-lg text-red-700'>{formErrors.company}</span>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-col md:w-3/4'>
        <textarea
          className={`${
            formErrors.text ? 'border-2 border-red-700' : ''
          } w-full resize-none rounded-xl bg-primary/60 p-1 px-5 text-2xl placeholder:h-full placeholder:text-2xl placeholder:text-secondary/70 focus:border-primary focus:outline-none focus:ring-0`}
          placeholder='How can we help you?*'
          name='text'
          onChange={onChange}
          rows={4}
        />
        <span className='px-2 text-lg text-red-700'>{formErrors.text}</span>
      </div>
      <DoubleButton
        label='Send now!'
        onClick={onSend}
        className='px-4 text-xl lg:px-10 lg:text-xl'
      />
    </div>
  );
}
