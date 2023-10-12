import { ButtonHTMLAttributes } from 'react';
import './styles/OrderNowButton.css';
interface OrderNowButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function OrderNowButton(props: OrderNowButtonProps) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} box translate-x-0 cursor-pointer rounded-xl bg-gray-600/50 px-5 py-4 font-coiny text-2xl text-secondary shadow lg:text-4xl`}
      onClick={onClick}
    >
      Order now!
    </div>
  );
}
