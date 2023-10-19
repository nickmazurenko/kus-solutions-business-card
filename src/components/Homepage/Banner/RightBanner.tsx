import HomepageTextCard from './TextCard';

const textCards = [
  {
    label: '☄️ Quick',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labores fsafas fsa fsaf saf safasfsa fsa fa'
  },
  {
    label: '☄️ Quick',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labores fsafas fsa fsaf saf safasfsa fsa fa'
  },
  {
    label: '☄️ Quick',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labores fsafas fsa fsaf saf safasfsa fsa fa'
  }
];

// TODO: upload json with text
export default function RightBanner({ className }: { className?: string }) {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <div className='spotlight spotlight-right'></div>
      <div className='flex w-full flex-col items-center justify-center gap-5 md:items-end md:justify-end md:gap-10'>
        {textCards.map((card, index) => (
          <HomepageTextCard label={card.label} text={card.text} key={index} />
        ))}
      </div>
    </div>
  );
}
