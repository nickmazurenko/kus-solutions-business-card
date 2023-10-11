import { ButtonHTMLAttributes } from 'react';

interface OrderNowButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function OrderNowButton(props: OrderNowButtonProps) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} cursor-pointer rounded-full bg-gray-950 px-5 py-4 font-coiny text-2xl text-secondary shadow-button shadow-primary transition-all delay-100 hover:translate-x-[-5%] hover:translate-y-[5%] hover:shadow-none lg:text-4xl`}
      onClick={onClick}
    >
      <span className='text-primary'>Order</span> now!
    </div>
  );
}
