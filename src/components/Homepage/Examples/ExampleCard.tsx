import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';
import DoubleButton from '../../buttons/DoubleButton';
import CarouselControl from './CarouselControl';
import ExampleModal from './ExampleModal';

export interface ExampleCardProps {
  className?: string;
  preview: string;
  images: string[];
  tags?: string[];
  title: string;
  text: string;
  link?: string;
}

const ExampleCard = (props: ExampleCardProps) => {
  const { className, tags, preview, images, title, text } = props;
  const [showModal, setShowModal] = useState(false);
  const [hover, setHover] = useState(false);
  const [imageHover, setImageHover] = useState(false);

  return (
    <>
      <ExampleModal example={props} setShow={setShowModal} show={showModal} />
      <div
        className={`${className} relative flex w-full flex-col items-center justify-center gap-5 text-secondary
      md:h-[650px]  md:w-[600px]`}
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
                  onMouseEnter={() => setImageHover(true)}
                  onMouseLeave={() => setImageHover(false)}
                  alt='example-image'
                  src={image}
                  width={500}
                  height={500}
                  className={`${
                    imageHover ? '-translate-y-1/2' : ''
                  } absolute top-0 h-auto w-full object-contain transition-all duration-[4000ms]`}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className='flex w-full flex-row items-center justify-between'>
          <div className='flex flex-wrap gap-2 self-start'>
            {tags?.map((tag, index) => (
              <div key={index} className='rounded-xl bg-primary/40 p-2'>
                {tag}
              </div>
            ))}
          </div>
          <div className='hidden md:block'>
            <DoubleButton
              onClick={() => setShowModal(true)}
              label={<div className='flex flex-row items-center gap-2'>Read More</div>}
              className='text-sm md:p-2 md:px-5 lg:text-base'
            />
          </div>
        </div>
        <div className='w-full text-left font-dongle text-4xl'>{title}</div>
        <div
          className={`line-clamp-3 w-full break-words text-justify font-dongle text-2xl text-gray-300`}
        >
          {text}
        </div>
        <div onClick={() => setShowModal(true)} className='block md:hidden'>
          <DoubleButton
            label={<div className='flex flex-row items-center gap-2'>Read More</div>}
            className='p-2 px-5 text-sm lg:text-base'
          />
        </div>
        <div className='block w-5/6 border-b-4 border-primary md:hidden'></div>
      </div>
    </>
  );
};

export default ExampleCard;
