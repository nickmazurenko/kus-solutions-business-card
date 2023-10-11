'use client';

import HomepageHeader from './components/Homepage/Header';
import HomepageBanner from './components/Homepage/Banner';
import HomepageSpotLights from './components/Homepage/SpotLights';

export default function Home() {
  return (
    <div className='h-full w-full'>
      <HomepageHeader />
      <HomepageBanner />
      <HomepageSpotLights />
    </div>
  );
}
