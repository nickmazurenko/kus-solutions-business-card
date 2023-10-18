import DoubleButton from '@/components/buttons/DoubleButton';
import Image from 'next/image';

export default function Failure({ setShowForm }: { setShowForm: (showForm: boolean) => void }) {
  return (
    <div className='flex w-full animate-appear flex-col items-center justify-center gap-5 rounded-3xl bg-gradient-to-br from-primary/30 p-5 py-14 caret-primary md:w-3/4 md:shadow-blblur md:shadow-primary/50 lg:w-3/6'>
      <Image
        src='/assets/catFail.png'
        alt='success'
        className='h-64 w-auto'
        height={500}
        width={500}
      />
      <div className='w-full text-center text-5xl'>We were not able to send a message</div>
      <DoubleButton
        label='Retry'
        onClick={() => {
          setShowForm(true);
        }}
      />
    </div>
  );
}
