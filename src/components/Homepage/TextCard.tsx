interface HomepageTextCardProps {
  label: string;
  text: string;
}

export default function HomepageTextCard(props: HomepageTextCardProps) {
  const { label, text } = props;
  return (
    <div className='flex max-w-[300px] flex-col rounded-3xl bg-primary bg-opacity-20 p-5 backdrop-blur-md'>
      <span className='font-dongle text-2xl text-secondary'>{label}</span>
      <p className='line-clamp-3 text-justify text-sm text-gray-400'>{text}</p>
    </div>
  );
}
