import gsap from 'gsap';
import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import './styles/OrderNowButton.css';
interface OrderNowButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function OrderNowButton(props: OrderNowButtonProps) {
  const { className } = props;

  const [sectionId, setSectionId] = useState('');
  useEffect(() => {
    if (sectionId.length)
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: sectionId,
          autoKill: false
        }
      });
    setSectionId('');
  }, [sectionId]);

  return (
    <div
      className={`${className} box button-shadow translate-x-0 cursor-pointer rounded-xl bg-gray-600/50 px-5 py-4 text-center font-coiny text-2xl text-secondary [@media(min-width:1000px)]:text-[25px] [@media(min-width:1200px)]:text-4xl`}
      onClick={() => {
        setSectionId('#contactUs');
      }}
    >
      Order now!
    </div>
  );
}
