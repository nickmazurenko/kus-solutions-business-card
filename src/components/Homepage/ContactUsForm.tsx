import DoubleButton from '../buttons/DoubleButton';

interface ContactUsFormProps {
  className?: string;
}

export default function ContactUsForm(props: ContactUsFormProps) {
  const { className } = props;
  return (
    <div
      className={`${className} flex h-full w-full flex-col items-center justify-center border-b-4 border-b-primary p-2 py-10 font-dongle text-secondary`}
    >
      <div className='flex w-full flex-col items-center justify-center gap-5 rounded-3xl bg-gradient-to-br from-primary/30 p-5 py-14 md:w-3/4 md:shadow-blblur md:shadow-primary/50 lg:w-3/6'>
        <div className='w-full text-center text-5xl'>Contact Us</div>
        <div className='flex w-full flex-col gap-5 md:flex-row'>
          <div className='flex w-full flex-col gap-5 md:w-1/2'>
            <input
              className='rounded-xl bg-primary/60 p-1 px-5 text-2xl placeholder:h-full placeholder:text-2xl placeholder:text-secondary/70'
              placeholder='Full Name*'
            />
            <input
              className='rounded-xl bg-primary/60 p-1 px-5 text-2xl placeholder:h-full placeholder:text-2xl placeholder:text-secondary/70'
              placeholder='Phone Number(optional)'
              type='email'
            />
          </div>
          <div className='flex w-full flex-col gap-5 md:w-1/2'>
            <input
              className='rounded-xl bg-primary/60 p-1 px-5 text-2xl placeholder:h-full placeholder:text-2xl placeholder:text-secondary/70'
              placeholder='Email address*'
            />
            <input
              className='rounded-xl bg-primary/60 p-1 px-5 text-2xl placeholder:h-full placeholder:text-2xl placeholder:text-secondary/70'
              placeholder='Company Name (optional)'
            />
          </div>
        </div>
        <div className='flex w-full md:w-3/4'>
          <textarea
            className='w-full resize-none rounded-xl bg-primary/60 p-1 px-5 text-2xl placeholder:h-full placeholder:text-2xl placeholder:text-secondary/70'
            placeholder='How can we help you?*'
            rows={4}
          />
        </div>
        <DoubleButton label='Send now!' className='px-4 text-xl lg:px-10 lg:text-xl' />
      </div>
    </div>
  );
}
