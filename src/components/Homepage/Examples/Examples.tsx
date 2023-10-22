import examples from '@/data/examples.json';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import ExampleCard from './ExampleCard';

export interface ExamplesProps {
  className?: string;
}

export default function HomepageExamples(props: ExamplesProps) {
  const { className } = props;
  const bgTextRef = useRef(null);
  useEffect(() => {
    gsap.to(bgTextRef.current, {
      yPercent: -100,
      duration: 5,
      ease: 'none',
      scrollTrigger: {
        trigger: bgTextRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);
  return (
    <div
      id='examples'
      className={`${className} relative flex h-full w-full flex-col items-center justify-center gap-10 p-5 md:p-10`}
    >
      <div className='spotlight spotlight-left'></div>
      <div className='font-dongle text-5xl  uppercase text-secondary'>Examples</div>
      <div
        ref={bgTextRef}
        className='text-shadow absolute z-0 hidden -rotate-90 transform text-start text-[80px] uppercase tracking-wider  text-background brightness-50  lg:block lg:text-[80px] '
      >
        featured projects
      </div>
      <div className='z-30 flex h-full w-full flex-wrap items-center justify-around gap-10'>
        {examples.map((example, index) => (
          <ExampleCard
            preview={example.preview}
            images={example.images}
            text={example.text}
            key={index}
            title={example.title}
            tags={example.tags}
            link={example.link}
          />
        ))}
      </div>
    </div>
  );
}
