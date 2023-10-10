import { ButtonHTMLAttributes } from 'react';

interface OrderNowButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function OrderNowButton(props: OrderNowButtonProps) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-950 cursor-pointer text-secondary rounded-xl shadow-primary shadow-button hover:shadow-none hover:translate-x-[-5%] hover:translate-y-[5%] transition-all delay-200 py-4 px-5 text-2xl lg:text-4xl font-coiny`}
      onClick={onClick}
    >
      <span className='text-primary'>Order</span> now!
    </div>
  );
}
