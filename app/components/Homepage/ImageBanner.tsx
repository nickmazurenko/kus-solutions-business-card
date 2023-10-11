import { Carousel } from 'flowbite-react';
import { useState } from 'react';

export default function ImageBanner({ className }: { className?: string }) {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div
      className={`top-0 w-full ${className} inset-0 flex items-center justify-center md:absolute md:left-44 md:top-[-30%]`}
    >
      <Carousel
        className='transition-all pointer-events-none delay-500'
        slideInterval={10000}
        pauseOnHover
        indicators={false}
        leftControl=' '
        rightControl=' '
        onSlideChange={(imageNum) => {
          setCurrentImage(imageNum);
        }}
      >
        <img
          className={`z-0 h-full w-full object-contain transition-opacity delay-150 md:w-auto ${
            currentImage === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          alt='banner-image'
          src='/assets/textPurple.png'
        />
        <img
          className={`z-0 h-full w-full object-contain transition-opacity delay-150 md:w-auto ${
            currentImage === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          alt='banner-image'
          src='/assets/catPurple.png'
        />
      </Carousel>
    </div>
  );
}
