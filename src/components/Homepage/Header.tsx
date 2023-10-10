import { Navbar } from 'flowbite-react';
import ContactUsButton from '../buttons/ContactUsButton';

export default function HomepageHeader() {
  return (
    <div className='w-full  top-5 sticky z-50'>
      <Navbar className='bg-background bg-opacity-40' fluid rounded>
        <Navbar.Brand href='/'>
          <img
            alt='logo'
            className='mr-3 h-11 md:h-14'
            src={process.env.PUBLIC_URL + '/logo.png'}
          />
          <div className='text-lg md:text-2xl font-coiny text-secondary tracking-wider leading-5 md:leading-6'>
            <div className='whitespace-nowrap text-primary'>{"Kus'"}</div>
            <div className='whitespace-nowrap'>Solutions</div>
          </div>
        </Navbar.Brand>
        <div className='flex md:order-2 gap-2 md:gap-6 md:pr-5 items-center h-full text-xs md:text-base text-secondary'>
          <ContactUsButton />
          <span>EN\UA</span>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className='text-primary text-lg' href='#'>
            Home
          </Navbar.Link>
          <Navbar.Link className='text-secondary text-lg' href='#'>
            Technologies
          </Navbar.Link>
          <Navbar.Link className='text-secondary text-lg' href='#'>
            Reviews
          </Navbar.Link>
          <Navbar.Link className='text-secondary text-lg' href='#'>
            About Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
