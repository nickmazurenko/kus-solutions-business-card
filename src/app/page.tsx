'use client';
import '@/components/Homepage/styles/spotlights.css';
import HomepageHeader from '@/components/Homepage/Header';
import HomepageBanner from '@/components/Homepage/Banner/Banner';
import HomepageReviews from '@/components/Homepage/Reviews';
import { useEffect, useState } from 'react';
import HomepageTechnologies from '@/components/Homepage/Technologies';

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
        <div className='flex h-full w-full flex-col gap-5'>
          <HomepageHeader />
          <HomepageBanner className='mt-52' />
          <HomepageReviews />
          <HomepageTechnologies />
        </div>
      )}
    </>
  );
}
