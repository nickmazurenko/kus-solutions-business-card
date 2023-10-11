import OrderNowButton from '../buttons/OrderNowButton';
import ImageBanner from './ImageBanner';
import HomepageTextCard from './TextCard';

const LeftBanner = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-10 font-coiny text-secondary md:w-1/2 md:gap-32 ${className}`}
    >
      <div className='text-center md:text-right'>
        <div className='text-3xl lg:text-6xl'>WebSites with a</div>
        <div className='text-2xl lg:text-5xl'>
          <span className='text-primary'>{"Kus'"}</span>tom Touch!
        </div>
      </div>
      <OrderNowButton />
    </div>
  );
};

const RightBanner = ({ className }: { className?: string }) => {
  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center px-10 md:w-1/2 ${className}`}
    >
      <div className='flex w-full flex-col items-center justify-center gap-10 md:items-end md:justify-end'>
        <HomepageTextCard
          label='☄️ Quick'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labores fsafas fsa fsaf saf safasfsa fsa fa'
        />
        <HomepageTextCard
          label='☄️ Quick'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labores fsafas fsa fsaf saf safasfsa fsa fa'
        />
        <HomepageTextCard
          label='☄️ Quick'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labores fsafas fsa fsaf saf safasfsa fsa fa'
        />
      </div>
    </div>
  );
};

export default function HomepageBanner() {
  return (
    <div className='relative top-20 flex h-full w-full items-center justify-center md:top-44'>
      <div className='z-10 flex h-full w-full flex-col items-center justify-center gap-10 md:flex-row'>
        <ImageBanner className='z-0' />
        <LeftBanner className='z-10' />
        <RightBanner className='z-10' />
      </div>
    </div>
  );
}
