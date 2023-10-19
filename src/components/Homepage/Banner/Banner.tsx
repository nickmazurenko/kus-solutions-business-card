import ImageBanner from './ImageBanner';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

export default function HomepageBanner({ className }: { className?: string }) {
  return (
    <div
      id='banner'
      className={`relative flex h-full w-full items-center justify-center ${className}`}
    >
      <div className='z-10 flex h-full w-full flex-col items-center justify-center gap-10 border-b-4 border-primary pb-10 md:flex-row'>
        <ImageBanner className='top-[-100%] z-0 brightness-[0.4] md:left-32 md:top-[-30%] md:brightness-100' />
        <LeftBanner className='z-10 w-full gap-10 px-10 md:w-1/2 ' />
        <RightBanner className='z-10 w-full px-5 md:w-1/2 md:px-10' />
      </div>
    </div>
  );
}
