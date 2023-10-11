import HomepageBanner from '../components/Homepage/Banner';
import HomepageHeader from '../components/Homepage/Header';
import HomepageSpotLights from '../components/Homepage/SpotLights';

export default function HomePage() {
  return (
    <div className='h-full w-full'>
      <HomepageHeader />
      <HomepageBanner />
      <HomepageSpotLights />
    </div>
  );
}
