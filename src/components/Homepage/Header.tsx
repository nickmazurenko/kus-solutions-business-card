import { Navbar } from 'flowbite-react';
import ContactUsButton from '../buttons/ContactUsButton';

export default function HomepageHeader() {
  return (
    <div className='sticky  top-5 z-50 w-full'>
      <Navbar className='bg-background bg-opacity-40' fluid rounded>
        <Navbar.Brand href='/'>
          <img
            alt='logo'
            className='mr-3 h-11 md:h-14'
            src={process.env.PUBLIC_URL + '/logo.png'}
          />
          <div className='font-coiny text-lg leading-5 tracking-wider text-secondary md:text-2xl md:leading-6'>
            <div className='whitespace-nowrap text-primary'>{"Kus'"}</div>
            <div className='whitespace-nowrap'>Solutions</div>
          </div>
        </Navbar.Brand>
        <div className='flex h-full items-center gap-2 text-xs text-secondary md:order-2 md:gap-6 md:pr-5 md:text-base'>
          <ContactUsButton />
          <span>EN\UA</span>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className='text-lg text-primary' href='#'>
            Home
          </Navbar.Link>
          <Navbar.Link className='text-lg text-secondary' href='#'>
            Technologies
          </Navbar.Link>
          <Navbar.Link className='text-lg text-secondary' href='#'>
            Reviews
          </Navbar.Link>
          <Navbar.Link className='text-lg text-secondary' href='#'>
            About Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
