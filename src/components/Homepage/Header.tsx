import { Navbar } from 'flowbite-react';
import ContactUsButton from '../buttons/ContactUsButton';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
export default function HomepageHeader() {
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollToPlugin);

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
    }
  }, []);

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
      className={`sticky top-0 z-50 w-full transition-all duration-1000 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Navbar className='bg-background/60' rounded>
        <Navbar.Brand
          className='cursor-pointer'
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
        </Navbar.Brand>
        <div className='hover:text-primarylg:gap-6 flex h-full cursor-pointer items-center gap-2 text-xs text-secondary md:order-2  md:text-base lg:pr-5'>
          <ContactUsButton
            onClick={() => {
              setSectionId('#contactUs');
            }}
          />
          <span className='text-xs'>EN\UA</span>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <div
            onClick={() => {
              setSectionId('#technologies');
            }}
            className={`cursor-pointer p-2 text-xl text-secondary hover:text-primary md:p-0 md:text-base `}
          >
            Technologies
          </div>
          <div
            onClick={() => {
              setSectionId('#examples');
            }}
            className={`cursor-pointer p-2 text-xl text-secondary hover:text-primary md:p-0 md:text-base `}
          >
            Examples
          </div>
          <div
            onClick={() => {
              setSectionId('#reviews');
            }}
            className={`cursor-pointer p-2 text-xl text-secondary hover:text-primary md:p-0 md:text-base `}
          >
            Reviews
          </div>
          <div
            onClick={() => {
              setSectionId('#aboutUs');
            }}
            className={`cursor-pointer p-2 text-xl text-secondary hover:text-primary md:p-0 md:text-base `}
          >
            About Us
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
