import OrderNowButton from '@/components/buttons/OrderNowButton';

export default function LeftBanner({ className }: { className?: string }) {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center font-coiny text-secondary md:items-start ${className}`}
    >
      <div className='flex h-full flex-col text-center md:text-right'>
        <div className='text-3xl lg:text-6xl'>WebSites with a</div>
        <div className='text-2xl lg:text-5xl'>
          <span className='text-primary'>{"Kus'"}</span>tom Touch!
        </div>
        <OrderNowButton className='mt-10 self-center lg:mt-32 lg:w-1/2' />
      </div>
    </div>
  );
}
