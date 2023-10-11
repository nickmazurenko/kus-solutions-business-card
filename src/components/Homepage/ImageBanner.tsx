import { Carousel } from 'flowbite-react';

export default function ImageBanner({ className }: { className?: string }) {
  const images = ['/assets/catPurple.png', '/assets/textPurple.png'];

  return (
    <div
      className={`top-0 w-full ${className} inset-0 flex items-center justify-center md:absolute md:left-44 md:top-[-30%]`}
    >
      <Carousel
        className='pointer-events-none'
        slideInterval={10000}
        indicators={false}
        leftControl=' '
        rightControl=' '
      >
        {images.map((image, index) => (
          <img
            key={index}
            className={`z-0 h-full w-full object-contain transition-opacity delay-150 md:w-auto `}
            alt='banner-image'
            src={image}
          />
        ))}
      </Carousel>
    </div>
  );
}
