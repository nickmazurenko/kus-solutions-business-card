import reviews from '@/data/reviews.json';
import { Carousel } from 'flowbite-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { PiControlBold } from 'react-icons/pi';
import './styles/text.css';

gsap.registerPlugin(ScrollTrigger);

interface CarouselSlideProps {
  text: string;
  image: string;
}

const CarouselControl = ({ className }: { className: string }) => {
  return (
    <div className={`text-5xl text-primary ${className}`}>
      <PiControlBold />
    </div>
  );
};

const CarouselSlide = (props: CarouselSlideProps) => {
  const { text, image } = props;
  return (
    <div className='pointer-events-none h-full w-full p-2 md:p-10 md:px-20'>
      <div className='flex h-full w-full flex-col items-center justify-between gap-5 rounded-xl bg-primary/25 p-5 py-10 shadow-primary md:flex-row md:shadow-blblur'>
        <div className='relative flex h-auto min-h-fit min-w-fit items-center justify-center rounded-2xl bg-primary md:w-1/4'>
          <Image
            src={image}
            width={150}
            height={150}
            className='h-full min-h-fit w-full object-contain'
            alt='slide-image'
          />
        </div>
        <div className='md:w-4/3 line-clamp-5 break-words text-justify font-dongle text-3xl text-gray-300'>
          {text}
        </div>
      </div>
    </div>
  );
};

interface ReviewsProps {
  className?: string;
}

export default function HomepageReviews(props: ReviewsProps) {
  const { className } = props;
  const bgTextRef = useRef(null);

  useEffect(() => {
    gsap.to(bgTextRef.current, {
      xPercent: 28,
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
    <div id='reviews' className={`${className} relative flex h-full w-full flex-col py-10`}>
      <div className='spotlight spotlight-left'></div>
      <div className='relative hidden w-full items-center justify-center px-10 py-16 font-dongle text-5xl text-secondary md:flex'>
        <div
          ref={bgTextRef}
          className='text-shadow absolute left-[10%] z-0 text-start text-[200px] uppercase  tracking-wider text-background  brightness-50 lg:left-[25%] '
        >
          Reviews
        </div>
        <div className='z-10 text-6xl uppercase'>{`Kus'tomers' feedback`}d</div>
      </div>
      <div className='w-full pb-5 text-center font-dongle text-5xl text-secondary md:hidden'>
        Reviews
      </div>
      <Carousel
        indicators={false}
        pauseOnHover
        leftControl={<CarouselControl className='-rotate-90' />}
        rightControl={<CarouselControl className='rotate-90' />}
        className=''
      >
        {reviews.map((review, index) => (
          <CarouselSlide image={review.image} text={review.text} key={index} />
        ))}
      </Carousel>
    </div>
  );
}
