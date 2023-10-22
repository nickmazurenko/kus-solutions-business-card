'use client';
import HomepageAboutUs from '@/components/Homepage/AboutUs';
import HomepageBanner from '@/components/Homepage/Banner/Banner';
import ContactUsForm from '@/components/Homepage/ContactUs/ContactUsForm';
import HomepageExamples from '@/components/Homepage/Examples/Examples';
import HomepageFooter from '@/components/Homepage/Footer';
import HomepageHeader from '@/components/Homepage/Header';
import HomepageReviews from '@/components/Homepage/Reviews';
import HomepageTechnologies from '@/components/Homepage/Technologies';
import '@/components/Homepage/styles/spotlights.css';
import { useEffect, useState } from 'react';

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
          <HomepageExamples />
          <HomepageTechnologies />
          <HomepageReviews />
          <HomepageAboutUs />
          <ContactUsForm />
          <HomepageFooter />
        </div>
      )}
    </>
  );
}
