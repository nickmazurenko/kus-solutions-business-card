import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PiInstagramLogo, PiLinkedinLogo, PiTelegramLogo, PiTiktokLogo } from 'react-icons/pi';

interface HomepageFooterProps {
  className?: string;
}

export default function HomepageFooter(props: HomepageFooterProps) {
  const { className } = props;
  const [sectionId, setSectionId] = useState('');

  useEffect(() => {
    if (sectionId.length)
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: '#banner' === sectionId ? 0 : sectionId,
          autoKill: false
        }
      });
    setSectionId('');
  }, [sectionId]);

  return (
    <div
      className={`${className} flex h-full w-full flex-col items-center justify-center gap-10 p-10`}
    >
      <div className='flex flex-row gap-5 font-coiny text-4xl uppercase text-secondary'>
        <div className='text-primary'>our</div>
        contacts
      </div>
      <div className='flex flex-row gap-10 text-5xl text-secondary md:text-6xl'>
        <Link
          href='https://www.instagram.com/'
          className='cursor-pointer text-secondary hover:text-primary'
          target='_blank'
        >
          <PiInstagramLogo />
        </Link>
        <Link
          href='https://linkedin.com/'
          className='cursor-pointer text-secondary hover:text-primary'
          target='_blank'
        >
          <PiLinkedinLogo />
        </Link>
        <Link
          href='https://telegram.com/'
          className='cursor-pointer text-secondary hover:text-primary'
          target='_blank'
        >
          <PiTelegramLogo />
        </Link>
        <Link
          href='https://tiktok.com/'
          className='cursor-pointer text-secondary hover:text-primary'
          target='_blank'
        >
          <PiTiktokLogo />
        </Link>
      </div>
      <span className='cursor-default self-center font-dongle text-5xl text-primary md:self-start md:px-20'>
        Service
      </span>
      <div className='flex w-full flex-row-reverse items-center justify-between font-dongle text-3xl text-secondary md:flex-row md:px-20'>
        <div className='flex flex-col text-end md:text-start'>
          <div
            onClick={() => {
              setSectionId('#technologies');
            }}
            className={`cursor-pointer  text-secondary hover:text-primary`}
          >
            Technologies
          </div>
          <div
            onClick={() => {
              setSectionId('#examples');
            }}
            className={`cursor-pointer  text-secondary hover:text-primary`}
          >
            Examples
          </div>
          <div
            onClick={() => {
              setSectionId('#reviews');
            }}
            className={`cursor-pointer  text-secondary hover:text-primary`}
          >
            Reviews
          </div>
          <div
            onClick={() => {
              setSectionId('#aboutUs');
            }}
            className={`cursor-pointer  text-secondary hover:text-primary`}
          >
            About Us
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='underline'>Email</span>
          <span>Number</span>
          <div className='cursor-default opacity-0'>placeholder</div>
          <div
            className='flex cursor-pointer flex-row '
            onClick={() => {
              setSectionId('#banner');
            }}
          >
            <Image
              width={50}
              height={50}
              alt='logo'
              className='h-11 w-auto md:h-14 md:w-auto'
              src='/assets/logo.png'
            />
            <div className='font-coiny text-lg leading-5 tracking-wider text-secondary md:text-xl md:leading-6'>
              <div className='whitespace-nowrap text-primary'>{"Kus'"}</div>
              <div className='whitespace-nowrap'>Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
