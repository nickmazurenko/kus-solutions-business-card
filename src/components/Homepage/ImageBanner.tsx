import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ImageBanner({ className }: { className?: string }) {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 10 });
    tl.to(
      image1Ref.current,
      {
        x: '100%',
        opacity: 0,
        duration: 2
      },
      '+=1'
    ).fromTo(
      image2Ref.current,
      {
        x: '-100%',
        opacity: 0,
        duration: 2
      },
      {
        x: 0,
        opacity: 1,
        duration: 2
      },
      '-=1'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div
        className={`top-0 w-full ${className} inset-0 flex items-center justify-center md:absolute md:left-44 md:top-[-30%]`}
      >
        <Image
          ref={image2Ref}
          className={`z-0 h-full w-full  object-contain opacity-0 md:w-auto`}
          alt='banner-image'
          src='/assets/textPurple.png'
          width={1000}
          height={1000}
        />
      </div>
      <div
        className={`top-0 w-full ${className} absolute inset-0 flex items-center justify-center md:left-44 md:top-[-30%]`}
      >
        <Image
          ref={image1Ref}
          className={`z-0 h-full w-full object-contain md:w-auto`}
          alt='banner-image'
          src='/assets/catPurple.png'
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
}
