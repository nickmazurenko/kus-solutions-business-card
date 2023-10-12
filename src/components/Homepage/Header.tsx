import { Navbar } from 'flowbite-react';
import ContactUsButton from '../buttons/ContactUsButton';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function HomepageHeader() {
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos.current < currentScrollPos;

      if (isScrolledDown) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-1000 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Navbar className='bg-background/60' rounded>
        <Navbar.Brand href='/'>
          <Image
            width={50}
            height={50}
            alt='logo'
            className='h-11 md:h-12'
            src='/assets/logo.png'
          />
          <div className='font-coiny text-lg leading-5 tracking-wider text-secondary md:text-xl md:leading-6'>
            <div className='whitespace-nowrap text-primary'>{"Kus'"}</div>
            <div className='whitespace-nowrap'>Solutions</div>
          </div>
        </Navbar.Brand>
        <div className='flex h-full items-center gap-2 text-xs text-secondary md:order-2 md:text-base lg:gap-6 lg:pr-5'>
          <ContactUsButton />
          <span className='text-xs'>EN\UA</span>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className='text-base text-secondary' href='#'>
            Technologies
          </Navbar.Link>
          <Navbar.Link className='text-base text-primary' href='#'>
            Examples
          </Navbar.Link>
          <Navbar.Link className='text-base text-secondary' href='#'>
            Reviews
          </Navbar.Link>
          <Navbar.Link className='text-base text-secondary' href='#'>
            About Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
