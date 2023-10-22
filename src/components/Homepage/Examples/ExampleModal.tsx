import { Carousel, Modal } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';
import { PiLinkBold } from 'react-icons/pi';
import DoubleButton from '../../buttons/DoubleButton';
import CarouselControl from './CarouselControl';
import { ExampleCardProps } from './ExampleCard';

const ExampleModal = ({
  example,
  show,
  setShow
}: {
  example: ExampleCardProps;
  show: boolean;
  setShow: (show: boolean) => void;
}) => {
  const [imageHover, setImageHover] = useState(false);
  return (
    <Modal
      size='7xl'
      show={show}
      onClose={() => setShow(false)}
      style={{ backgroundColor: 'transparent !important' }}
      className='animate-appear bg-transparent font-dongle backdrop-blur-sm'
    >
      <Modal.Header className='border-b-primary bg-background dark:border-b-primary'>
        <div className='text-5xl text-secondary'>{example.title}</div>
      </Modal.Header>
      <Modal.Body className='bg-background'>
        <div className='relative flex flex-col items-center justify-center gap-5 bg-black text-2xl text-gray-400 md:p-5'>
          <div className='h-[50vh] w-full md:h-[100vh]'>
            <Carousel
              leftControl={<CarouselControl className='-rotate-90' />}
              rightControl={<CarouselControl className='rotate-90' />}
              slide={false}
              className='relative h-full w-full'
            >
              {example.images.map((image, index) => (
                <div key={index} className='relative h-full w-full'>
                  <Image
                    alt='example-image'
                    src={image}
                    width={1000}
                    height={1000}
                    onMouseEnter={() => setImageHover(true)}
                    onMouseLeave={() => setImageHover(false)}
                    className={`${
                      imageHover ? '-translate-y-1/2' : ''
                    } absolute top-0 h-auto w-full transition-all delay-1000 duration-[4000ms]`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className='flex flex-wrap gap-2 self-start'>
            {example.tags?.map((tag, index) => (
              <div key={index} className='rounded-xl bg-primary/70 p-2 text-gray-300'>
                {tag}
              </div>
            ))}
          </div>
          <div className={` w-full break-words text-justify font-dongle text-2xl text-gray-300`}>
            {example.text}
          </div>
          <a href={example.link} target='_blank' rel='noopener noreferrer'>
            <DoubleButton
              label={
                <div className='flex flex-row items-center justify-center gap-2 px-10 text-xl tracking-wider'>
                  <PiLinkBold /> <span>Go to Website</span>
                </div>
              }
              className='p-2 px-10 text-sm lg:text-base'
            />
          </a>
        </div>
      </Modal.Body>
      <Modal.Footer className='border-none bg-black  p-1 dark:border-none' />
    </Modal>
  );
};

export default ExampleModal;
