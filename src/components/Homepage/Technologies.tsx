import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import OrderNowButton from '../buttons/OrderNowButton';

// technologies logos
const logos = [
  '/assets/techLogos/reactLogo.png',
  '/assets/techLogos/nextLogo.png',
  '/assets/techLogos/materialLogo.png',
  '/assets/techLogos/tailwindLogo.png'
];

const config = {
  circlesNum: 21, // The total amount of circles for technologies
  parallaxIntensity: 70, // Adjust the factor to change the intensity of circles movement
  // Text for technologies card
  technologiesText:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dolores minima quo soluta iste amet cumque necessitatibus laborum quidem id laudantium, repellat consequatur, eius dolor ad tenetur rem, dolorem corrupti!'
};

interface HomepageTechnologies {
  className?: string;
}

interface TextCardProps {
  onMouseOver: () => void; // for scaling technologies on hover
  onMouseLeave: () => void; // for scaling technologies on hover
}

const TextCard = (props: TextCardProps) => {
  return (
    <div className='relative z-10 flex h-full w-full flex-col items-center justify-center gap-10 px-10 font-dongle text-secondary'>
      <div className='flex flex-col items-center text-4xl font-bold md:text-7xl'>
        <div className='capitalize'>Integrate your website with</div>
        <div
          className='rounded-2xl bg-primary/40 p-3 backdrop-blur-sm hover:bg-primary'
          onMouseEnter={props.onMouseOver}
          onMouseLeave={props.onMouseLeave}
        >
          powerful tools
        </div>
      </div>
      <div className='w-full rounded-3xl text-justify text-3xl md:w-1/2'>
        {config.technologiesText}
      </div>
      <OrderNowButton />
    </div>
  );
};

export default function HomepageTechnologies(props: HomepageTechnologies) {
  const { className } = props;
  const [hovered, setHovered] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);
  // Starting index for logos
  // It is minus one cause it updates on drawing each even circle
  let idx = -1;

  useEffect(() => {
    const grid = gridRef.current;
    if (grid) {
      const centerX = grid.offsetWidth / 2;
      const centerY = grid.offsetHeight / 2;

      const updateParallax = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const dx = (mouseX - centerX) / centerX;
        const dy = (mouseY - centerY) / centerY;
        gsap.to(grid, {
          x: -dx * config.parallaxIntensity,
          y: -dy * config.parallaxIntensity,
          duration: 0.2,
          ease: 'none'
        });
      };

      if (hovered) window.addEventListener('mousemove', updateParallax);

      return () => {
        window.removeEventListener('mousemove', updateParallax);
      };
    }
  }, [hovered]);

  // Scaling technologies on hover
  const onMouseOver = () => {
    gsap.to(gridRef.current, {
      scale: 1.5,
      duration: 1
    });
  };

  const onMouseLeave = () => {
    gsap.to(gridRef.current, {
      scale: 1,
      duration: 1
    });
  };

  return (
    <div
      id='technologies'
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      className={`${className} relative flex h-screen w-full flex-col`}
    >
      <div className='spotlight spotlight-right'></div>
      <div className='relative flex h-full w-full flex-col py-24 md:px-10'>
        <TextCard onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
        <div
          ref={gridRef}
          className='absolute top-0 z-0 grid h-full w-full grid-cols-3 items-center justify-items-center gap-1 brightness-[0.6] md:grid-cols-7 md:gap-20'
        >
          {Array.from({ length: config.circlesNum }).map((_, index) => {
            if (index % 2 === 0) idx++;

            return (
              <div
                key={index}
                className={`flex h-20 w-20 items-center justify-center overflow-clip rounded-full object-contain opacity-70 shadow-primary/50 md:h-36
          md:w-36 ${index % 2 === 0 ? 'bg-primary shadow-xl' : 'shadow-none'}`}
              >
                {index % 2 === 0 && (
                  <Image
                    src={logos[idx % logos.length]}
                    width={120}
                    height={120}
                    alt='tech-image'
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
