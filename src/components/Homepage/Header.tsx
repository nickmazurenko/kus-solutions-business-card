import { Navbar } from 'flowbite-react';
import ContactUsButton from '../buttons/ContactUsButton';
import Image from 'next/image';

export default function HomepageHeader() {
  return (
    <div className='sticky  top-5 z-50 w-full'>
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
