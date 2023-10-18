import { ButtonHTMLAttributes } from 'react';
import './styles/OrderNowButton.css';
interface OrderNowButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function OrderNowButton(props: OrderNowButtonProps) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} box translate-x-0 cursor-pointer rounded-xl bg-gray-600/50 px-5 py-4 text-center font-coiny text-2xl text-secondary shadow [@media(min-width:1000px)]:text-[25px] [@media(min-width:1200px)]:text-4xl`}
      onClick={onClick}
    >
      Order now!
    </div>
  );
}
