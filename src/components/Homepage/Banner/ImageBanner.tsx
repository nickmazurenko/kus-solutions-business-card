import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ImageBanner({ className }: { className?: string }) {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 10 });
    tl.to(image1Ref.current, { x: '100%', opacity: 0, duration: 2 }, '+=1').fromTo(
      image2Ref.current,
      { x: '-100%', opacity: 0, duration: 2 },
      { x: 0, opacity: 1, duration: 2 },
      '-=1'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div
        className={`top-0 w-full ${className} absolute inset-1 flex items-center justify-center`}
      >
        <Image
          ref={image2Ref}
          className={`z-0 h-full w-full object-contain opacity-0 md:w-auto`}
          alt='banner-image'
          src='/assets/textPurple.png'
          priority
          width={1000}
          height={1000}
        />
      </div>
      <div
        className={`top-0 w-full ${className} absolute inset-1 flex items-center justify-center`}
      >
        <Image
          ref={image1Ref}
          className={`z-0 h-full w-full object-contain md:w-auto`}
          alt='banner-image'
          src='/assets/catPurple.png'
          priority
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
}
