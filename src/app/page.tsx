'use client';
import '@/components/Homepage/styles/spotlights.css';
import HomepageHeader from '@/components/Homepage/Header';
import HomepageBanner from '@/components/Homepage/Banner';

export default function Home() {
  return (
    <div className='h-full w-full'>
      <HomepageHeader />
      <HomepageBanner />
    </div>
  );
}
