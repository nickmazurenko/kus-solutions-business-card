import examples from '@/data/examples.json';
import { Carousel, Modal } from 'flowbite-react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { PiControlBold, PiLinkBold } from 'react-icons/pi';
import DoubleButton from '../buttons/DoubleButton';

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
  link?: string;
}

const CarouselControl = ({ className }: { className: string }) => {
  return (
    <div className={`text-5xl text-primary ${className}`}>
      <PiControlBold />
    </div>
  );
};

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
                    } absolute top-0 h-auto w-full transition-all duration-[4000ms]`}
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
            link={example.link}
          />
        ))}
      </div>
    </div>
  );
}
