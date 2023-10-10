interface HomepageTextCardProps {
  label: string;
  text: string;
}

export default function HomepageTextCard(props: HomepageTextCardProps) {
  const { label, text } = props;
  return (
    <div className='max-w-[300px] flex flex-col rounded-3xl p-5 bg-primary bg-opacity-20 backdrop-blur-md'>
      <span className='text-2xl text-secondary font-dongle'>{label}</span>
      <p className='text-sm text-gray-400 text-justify line-clamp-3'>{text}</p>
    </div>
  );
}
