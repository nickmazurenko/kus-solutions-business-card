import { Navbar, Button } from 'flowbite-react';

export default function HomepageHeader() {
  return (
    <div className='w-full top-5 sticky'>
      <Navbar className='bg-background bg-opacity-40 ' fluid rounded>
        <Navbar.Brand href='/'>
          <img alt='logo' className='mr-3 h-6 sm:h-9' src='/favicon.svg' />
          <span className='self-center whitespace-nowrap text-xl font-semibold text-secondary'>
            {"Kus' Solutions"}
          </span>
        </Navbar.Brand>
        <div className='flex md:order-2 gap-2'>
          <Button className='bg-primary'>Contact Us</Button>
          <Button className='bg-transparent'>EN\UA</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className='text-primary' href='#'>
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link className='text-secondary' href='#'>
            Technologies
          </Navbar.Link>
          <Navbar.Link href='#' className='text-secondary'>
            Reviews
          </Navbar.Link>
          <Navbar.Link href='#' className='text-secondary'>
            About Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

// <div classNameName="w-full top-10 sticky">
//   <div classNameName="flex items-center justify-between px-5 text-secondary">Some text</div>
// </div>
