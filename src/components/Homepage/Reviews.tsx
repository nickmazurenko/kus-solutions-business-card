import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { PiControlBold } from 'react-icons/pi';
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
    <div className='pointer-events-none h-full w-full p-5 md:p-10 md:px-20'>
      <div className='flex h-full w-full flex-col items-center justify-between gap-5 rounded-xl bg-primary/25 p-5 py-10 shadow-blblur shadow-primary md:flex-row'>
        <div className='relative flex h-auto min-h-fit min-w-fit items-center justify-center rounded-2xl bg-primary md:w-1/4'>
          <Image
            src={image}
            width={150}
            height={150}
            className='h-full min-h-fit w-full object-contain'
            alt='slide-image'
          />
        </div>
        <div className='md:w-4/3 max-h-24 overflow-hidden text-ellipsis break-words text-justify font-dongle text-3xl text-gray-300'>
          {text}
        </div>
      </div>
    </div>
  );
};

export default function HomepageReviews({ className }: { className: string }) {
  return (
    <div className={`${className} relative flex h-full w-full flex-col`}>
      <div className='spotlight spotlight-left'></div>
      <span className='w-full p-5 text-center font-dongle text-5xl text-secondary md:text-start'>
        Reviews
      </span>
      <Carousel
        indicators={false}
        pauseOnHover
        leftControl={<CarouselControl className='-rotate-90' />}
        rightControl={<CarouselControl className='rotate-90' />}
        className=''
      >
        <CarouselSlide
          image='/assets/catPurple.png'
          text='Aute officia laboris fugiat labore commodo eu irure ad tempor eu pariatur eiusmod. Deserunt ea adipisicing incididunt veniam irure do aliqua Lorem reprehenderit reprehenderit labore proident. Ut ipsum laborum consequat sit tempor.'
        />
        <CarouselSlide
          image='/assets/catPurple.png'
          text='Officia pariatur consequat voluptate dolore sint eiusmod mollit exercitation commodo. Ex in elit tempor irure quis officia ea et cupidatat proident aute sunt incididunt eiusmod. Aute cillum proident commodo irure. Ullamco ea dolor exercitation aute ipsum est laboris est veniam eiusmod occaecat et velit minim.Aute officia laboris fugiat labore commodo eu irure ad tempor eu pariatur eiusmod. Deserunt ea adipisicing incididunt veniam irure do aliqua Lorem reprehenderit reprehenderit labore proident. Ut ipsum laborum consequat sit tempor.'
        />
      </Carousel>
    </div>
  );
}
