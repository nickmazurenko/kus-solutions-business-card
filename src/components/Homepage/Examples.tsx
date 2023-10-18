import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const examples = [
  {
    image: '/assets/test.png',
    text: 'Sit ex aliquip consequat labore qui aute anim sit. Aliquip fugiat elit ad officia id ad exercitation sit excepteur duis. Nostrud qui ullamco labore nostrud ullamco commodo aute ut proident elit occaecat magna. Veniam quis proident eiusmod laborum laboris veniam. Sunt dolor Lorem sunt aliqua ipsum fugiat aliquip do officia sint minim tempor. Consequat in adipisicing consectetur cillum amet do nulla amet minim sint.',
    title: 'Website Name',
    tags: ['smth', 'another tag', 'something else']
  },
  {
    image: '/assets/test.png',
    text: 'Sit ex aliquip consequat labore qui aute anim sit. Aliquip fugiat elit ad officia id ad exercitation sit excepteur duis. Nostrud qui ullamco labore nostrud ullamco commodo aute ut proident elit occaecat magna. Veniam quis proident eiusmod laborum laboris veniam. Sunt dolor Lorem sunt aliqua ipsum fugiat aliquip do officia sint minim tempor. Consequat in adipisicing consectetur cillum amet do nulla amet minim sint.',
    title: 'Website Name',
    tags: ['smth', 'another tag', 'something else']
  },
  {
    image: '/assets/test.png',
    text: 'Sit ex aliquip consequat labore qui aute anim sit. Aliquip fugiat elit ad officia id ad exercitation sit excepteur duis. Nostrud qui ullamco labore nostrud ullamco commodo aute ut proident elit occaecat magna. Veniam quis proident eiusmod laborum laboris veniam. Sunt dolor Lorem sunt aliqua ipsum fugiat aliquip do officia sint minim tempor. Consequat in adipisicing consectetur cillum amet do nulla amet minim sint.',
    title: 'Website Name',
    tags: ['smth', 'another tag', 'something else']
  },
  {
    image: '/assets/test.png',
    text: 'Sit ex aliquip consequat labore qui aute anim sit. Aliquip fugiat elit ad officia id ad exercitation sit excepteur duis. Nostrud qui ullamco labore nostrud ullamco commodo aute ut proident elit occaecat magna. Veniam quis proident eiusmod laborum laboris veniam. Sunt dolor Lorem sunt aliqua ipsum fugiat aliquip do officia sint minim tempor. Consequat in adipisicing consectetur cillum amet do nulla amet minim sint.',
    title: 'Website Name',
    tags: ['smth', 'another tag', 'something else']
  }
];

interface ExamplesProps {
  className?: string;
}

interface ExampleCardProps {
  className?: string;
  image: string;
  tags?: string[];
  title: string;
  text: string;
}
const ExampleCard = (props: ExampleCardProps) => {
  const { className, tags, image, title, text } = props;
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`${className} flex w-full flex-col items-center justify-center gap-5 text-secondary md:h-[500px] md:w-[600px]`}
    >
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className={`${
          hover ? 'from-primary/80' : 'from-primary/40 '
        } flex min-h-[180px] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br  object-cover shadow-tl shadow-primary transition-colors delay-1000 md:min-h-[200px]`}
      >
        <Image
          alt='example-image'
          src={image}
          width={500}
          height={500}
          className={`${
            hover ? '-rotate-6' : ''
          } h-auto w-full -rotate-12 transform object-contain shadow-repeat shadow-primary/20 duration-200 md:w-4/5 md:translate-y-10`}
        />
      </div>
      <div className='flex flex-wrap gap-2 self-start'>
        {tags?.map((tag, index) => (
          <div key={index} className='rounded-xl bg-primary/40 p-2'>
            {tag}
          </div>
        ))}
      </div>
      <div className='w-full text-left font-dongle text-4xl'>{title}</div>
      <div className='line-clamp-3 w-full break-words text-justify font-dongle text-2xl text-gray-300'>
        {text}
      </div>
    </div>
  );
};

export default function HomepageExamples(props: ExamplesProps) {
  const { className } = props;
  const bgTextRef = useRef(null);
  useEffect(() => {
    gsap.to(bgTextRef.current, {
      yPercent: -100,
      duration: 5,
      ease: 'none',
      scrollTrigger: {
        trigger: bgTextRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);
  return (
    <div
      id='examples'
      className={`${className} relative flex h-full w-full flex-col items-center justify-center gap-10 p-5 md:p-10`}
    >
      <div className='font-dongle text-5xl  uppercase text-secondary'>Examples</div>
      <div
        ref={bgTextRef}
        className='text-shadow absolute z-0 hidden -rotate-90 transform text-start text-[80px] uppercase tracking-wider  text-background brightness-50  lg:block lg:text-[80px] '
      >
        featured projects
      </div>
      <div className='z-30 flex h-full w-full flex-wrap items-center justify-around gap-5'>
        {examples.map((example, index) => (
          <ExampleCard
            image={example.image}
            text={example.text}
            key={index}
            title={example.title}
            tags={example.tags}
          />
        ))}
      </div>
    </div>
  );
}
