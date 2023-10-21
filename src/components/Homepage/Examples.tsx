import examples from '@/data/examples.json';
import { Carousel } from 'flowbite-react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { PiControlBold } from 'react-icons/pi';

interface ExamplesProps {
  className?: string;
}

interface ExampleCardProps {
  className?: string;
  preview: string;
  images: string[];
  tags?: string[];
  title: string;
  text: string;
}

const CarouselControl = ({ className }: { className: string }) => {
  return (
    <div className={`text-5xl text-primary ${className}`}>
      <PiControlBold />
    </div>
  );
};

const ExampleCard = (props: ExampleCardProps) => {
  const { className, tags, preview, images, title, text } = props;
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`${className} relative flex w-full flex-col items-center justify-center gap-5 text-secondary md:h-[600px] md:w-[600px]`}
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
        } relative flex h-[250px] min-h-[180px] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br  object-cover shadow-tl shadow-primary transition-colors delay-1000 md:h-[400px] md:min-h-[200px]`}
      >
        <Carousel
          leftControl={<CarouselControl className='-rotate-90' />}
          rightControl={<CarouselControl className='rotate-90' />}
          slide={false}
          className='relative h-full w-full'
        >
          <div className='relative h-full w-full'>
            <Image
              alt='example-image'
              src={preview}
              width={500}
              height={500}
              className={`${
                hover ? '-rotate-6' : ''
              } absolute right-0 top-10 h-auto w-4/5 -rotate-12 transform object-contain shadow-repeat shadow-primary/20 duration-200`}
            />
          </div>
          {images.map((image, index) => (
            <div key={index} className='relative h-full w-full'>
              <Image
                alt='example-image'
                src={image}
                width={500}
                height={500}
                className={`absolute top-0 h-auto w-full  object-contain`}
              />
            </div>
          ))}
        </Carousel>
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
      <div className='block w-1/2 border-b-4 border-primary md:hidden'></div>
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
      <div className='spotlight spotlight-left'></div>
      <div className='font-dongle text-5xl  uppercase text-secondary'>Examples</div>
      <div
        ref={bgTextRef}
        className='text-shadow absolute z-0 hidden -rotate-90 transform text-start text-[80px] uppercase tracking-wider  text-background brightness-50  lg:block lg:text-[80px] '
      >
        featured projects
      </div>
      <div className='z-30 flex h-full w-full flex-wrap items-center justify-around gap-10'>
        {examples.map((example, index) => (
          <ExampleCard
            preview={example.preview}
            images={example.images}
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
