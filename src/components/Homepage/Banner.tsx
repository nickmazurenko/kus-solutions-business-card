import OrderNowButton from '../buttons/OrderNowButton';
import HomepageTextCard from './TextCard';

const ImageBanner = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-full top-0 ${className} md:left-44 md:absolute md:top-[-30%] justify-center items-center flex inset-0`}
    >
      <img
        className='z-0 w-full h-full md:w-auto object-contain'
        alt='banner-image'
        src={process.env.PUBLIC_URL + '/assets/textPurple.png'}
      />
    </div>
  );
};

const LeftBanner = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-full md:w-1/2 text-secondary justify-center gap-10 md:gap-32 items-center flex flex-col h-full font-coiny ${className}`}
    >
      <div className='md:text-right text-center'>
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
      className={`w-full md:w-1/2 flex flex-col h-full relative px-10 items-center justify-center ${className}`}
    >
      <div className='w-full flex flex-col items-center md:items-end gap-10 justify-center md:justify-end'>
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
    <div className='w-full h-full flex relative top-20 md:top-44 items-center justify-center'>
      <div className='flex flex-col md:flex-row gap-10 w-full h-full z-10 items-center justify-center'>
        <ImageBanner className='z-0' />
        <LeftBanner className='z-10' />
        <RightBanner className='z-10' />
      </div>
    </div>
  );
}
