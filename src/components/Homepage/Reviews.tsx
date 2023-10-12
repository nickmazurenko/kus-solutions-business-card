import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { PiControlBold } from 'react-icons/pi';

const CarouselControl = ({ className }: { className: string }) => {
  return (
    <div className={`text-5xl text-primary ${className}`}>
      <PiControlBold />
    </div>
  );
};

interface CarouselSlideProps {
  text: string;
  image: string;
}

const CarouselSlide = (props: CarouselSlideProps) => {
  const { text, image } = props;
  return (
    <div className='pointer-events-none flex h-full w-full items-center justify-center justify-items-center'>
      <div className='md:shadow-blblur h-[90%] rounded-[60px] bg-primary/25 shadow-primary md:w-[80%]'>
        <div className='flex h-full w-full flex-col items-center justify-center p-10 md:flex-row'>
          <div className='relative h-48 w-48'>
            <Image
              objectFit='contain'
              src={image}
              layout='fill'
              className='h-48'
              alt='review-image'
            />
            <div className='h-48 w-full rounded-xl bg-primary object-cover md:w-48'></div>
          </div>

          <div className='md:p-8'>
            <div className='text-sm font-semibold uppercase tracking-wide text-indigo-500'>
              Review
            </div>
            <p className='mt-2 break-all text-gray-600'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomepageReviews() {
  return (
    <div className='relative flex h-[100vh] w-full flex-col items-center justify-center border-b-4 border-primary p-3 md:p-10'>
      <div className='spotlight spotlight-left'></div>
      <span className='w-full py-5 text-start font-dongle text-5xl text-secondary'>Reviews</span>
      <Carousel
        indicators={false}
        pauseOnHover
        leftControl={<CarouselControl className='-rotate-90' />}
        rightControl={<CarouselControl className='rotate-90' />}
        className='h-[1000px] w-full lg:w-[80%]'
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
