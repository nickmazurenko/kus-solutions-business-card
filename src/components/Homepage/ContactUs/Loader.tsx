import { Spinner } from 'flowbite-react';

export default function Loader() {
  return (
    <div className='flex w-full animate-appear flex-col items-center justify-center gap-5 rounded-3xl bg-gradient-to-br from-primary/30 p-5 py-14 caret-primary md:w-3/4 md:shadow-blblur md:shadow-primary/50 lg:w-3/6'>
      <Spinner color='purple' size='xl' className='h-32 w-auto' />
      <div className='w-full text-center text-5xl'>We are sending your message</div>
    </div>
  );
}
