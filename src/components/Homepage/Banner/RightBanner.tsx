import HomepageTextCard from './TextCard';
// TODO: upload json with text
export default function RightBanner({ className }: { className?: string }) {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <div className='spotlight spotlight-right'></div>
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
}
