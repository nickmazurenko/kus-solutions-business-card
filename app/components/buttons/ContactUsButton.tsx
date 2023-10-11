import React, { ButtonHTMLAttributes } from 'react';

interface ContactUsButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function ContactUsButton(props: ContactUsButtonProps) {
  return (
    <div
      className={`flex cursor-pointer items-center justify-center justify-items-center rounded-full bg-primary px-3 py-2 text-background md:px-5 ${props.className} transition-all duration-500 hover:bg-background hover:text-secondary hover:shadow-md hover:shadow-primary`}
      onClick={props.onClick}
    >
      <span className='text-center font-dongle text-xl md:text-2xl'>Contact Us</span>
    </div>
  );
}
