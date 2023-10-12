'use client';
import '@/components/Homepage/styles/spotlights.css';
import HomepageHeader from '@/components/Homepage/Header';
import HomepageBanner from '@/components/Homepage/Banner';
import HomepageReviews from '@/components/Homepage/Reviews';

export default function Home() {
  return (
    <div className='h-full w-full'>
      <HomepageHeader />
      <HomepageBanner />
      <HomepageReviews />
    </div>
  );
}
