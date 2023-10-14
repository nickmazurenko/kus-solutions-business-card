import Image from 'next/image';
import Link from 'next/link';
import { PiInstagramLogo, PiLinkedinLogo, PiTelegramLogo, PiTiktokLogo } from 'react-icons/pi';

interface HomepageFooterProps {
  className?: string;
}

export default function HomepageFooter(props: HomepageFooterProps) {
  const { className } = props;
  return (
    <div
      className={`${className} flex h-full w-full flex-col items-center justify-center gap-10 p-10`}
    >
      <div className='flex flex-row gap-5 font-coiny text-4xl uppercase text-secondary'>
        <div className='text-primary'>our</div>
        contacts
      </div>
      <div className='flex flex-row gap-10 text-5xl text-secondary md:text-6xl'>
        <Link href='https://www.instagram.com/' className='cursor-pointer'>
          <PiInstagramLogo />
        </Link>
        <Link href='https://linkedin.com/' className='cursor-pointer'>
          <PiLinkedinLogo />
        </Link>
        <Link href='https://telegram.com/' className='cursor-pointer'>
          <PiTelegramLogo />
        </Link>
        <Link href='https://tiktok.com/' className='cursor-pointer'>
          <PiTiktokLogo />
        </Link>
      </div>
      <span className='self-center font-dongle text-5xl text-primary md:self-start md:px-20'>
        Service
      </span>
      <div className='flex w-full flex-row-reverse items-center justify-between font-dongle text-3xl text-secondary md:flex-row md:px-20'>
        <div className='flex flex-col text-end md:text-start'>
          <div>Technologies</div>
          <div>Examples</div>
          <div>Reviews</div>
          <div>About Us</div>
        </div>
        <div className='flex flex-col'>
          <span className='underline'>Email</span>
          <span>Number</span>
          <div className='opacity-0'>placeholder</div>
          <div className='flex flex-row'>
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
