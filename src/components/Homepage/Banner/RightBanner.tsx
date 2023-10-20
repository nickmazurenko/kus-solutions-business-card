import banner from '@/data/banner.json';
import HomepageTextCard from './TextCard';

// TODO: upload json with text
export default function RightBanner({ className }: { className?: string }) {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <div className='spotlight spotlight-right'></div>
      <div className='flex w-full flex-col items-center justify-center gap-5 md:items-end md:justify-end md:gap-10'>
        {banner.map((card, index) => (
          <HomepageTextCard label={card.label} text={card.text} key={index} />
        ))}
      </div>
    </div>
  );
}
