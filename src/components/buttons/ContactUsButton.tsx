import React, { ButtonHTMLAttributes } from 'react';

interface ContactUsButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function ContactUsButton(props: ContactUsButtonProps) {
  return (
    <div
      className={`cursor-pointer rounded-full text-background bg-primary px-3 py-2 md:px-5 flex items-center justify-items-center justify-center ${props.className} hover:shadow-md hover:shadow-primary hover:text-secondary transition-all duration-500 hover:bg-background`}
      onClick={props.onClick}
    >
      <span className='font-dongle text-xl md:text-2xl text-center'>Contact Us</span>
    </div>
  );
}
