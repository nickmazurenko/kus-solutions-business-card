import { PiControlBold } from 'react-icons/pi';

const CarouselControl = ({ className }: { className: string }) => {
  return (
    <div className={`text-5xl text-primary ${className}`}>
      <PiControlBold />
    </div>
  );
};

export default CarouselControl;
