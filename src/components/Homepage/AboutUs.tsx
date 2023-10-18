import { gsap } from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import './styles/text.css';

const cards = [
  {
    image: '/assets/textPurple.png',
    text: 'Non ex magna qui magna aliquip sunt eu reprehenderit. Mollit commodo amet quis exercitation non amet anim laboris. Veniam culpa excepteur ipsum id sint voluptate dolore eu ex laborum esse officia laboris ad.'
  },
  {
    image: '/assets/textPurple1.png',
    text: 'Magna nulla irure veniam tempor pariatur excepteur consectetur tempor esse.Sit occaecat culpa mollit Lorem consequat pariatur qui sunt nostrud nisi.'
  },
  {
    image: '/assets/textCat.png',
    text: 'Anim consectetur aute laborum commodo ullamco eiusmod ea id veniam fugiat nulla nostrud tempor.'
  }
];

interface AboutUsProps {
  className?: string;
}

interface CardProps {
  imageOnLeft?: boolean;
  image: string;
  text: string;
}

const Card = (props: CardProps) => {
  const { image, imageOnLeft = true, text } = props;
  return (
    <div className='relative flex min-h-full min-w-full flex-row items-center justify-between py-5 md:mx-10'>
      <Image
        alt='aboutus-image'
        className={`absolute bottom-0 hidden h-[200px] w-auto md:block ${
          imageOnLeft ? '-translate-x-52' : 'right-0 translate-x-52'
        }  translate-y-12`}
        src={image}
        width={500}
        height={500}
        draggable={false}
      />
      <div className='text-justify text-gray-300'>{text}</div>
    </div>
  );
};

export default function HomepageAboutUs(props: AboutUsProps) {
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
    <div
      id='aboutUs'
      className={`${className} relative flex w-full flex-col border-b-4 border-primary p-5 py-16 md:px-0`}
    >
      <div className='spotlight spotlight-left'></div>
      <div className='relative hidden w-full items-center justify-center px-10 py-16 font-dongle text-5xl text-secondary md:flex'>
        <div
          ref={bgTextRef}
          className='text-shadow absolute left-0 z-0 text-start text-[150px] uppercase  tracking-wider text-background  brightness-50 lg:left-[15%] lg:text-[200px] '
        >
          {`"About Us"`}
        </div>
        <div className='z-10 text-6xl uppercase'>What we do</div>
      </div>
      <div className='w-full pb-5 text-center font-dongle text-5xl text-secondary md:hidden'>
        About Us
      </div>
      <div className='flex h-full w-full flex-col items-center justify-center gap-10 self-center rounded-3xl bg-primary/20 p-5 md:w-1/2 md:p-10'>
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <Card text={card.text} image={card.image} imageOnLeft={index % 2 === 0} />
            {index + 1 < cards.length && (
              <div className='w-full border-b-4 border-primary md:w-3/4'></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
