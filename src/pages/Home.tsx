import HomepageHeader from '../components/Homepage/Header';
import HomepageSpotLights from '../components/Homepage/SpotLights';

export default function HomePage() {
  return (
    <div className="w-full h-[2000px]">
      <HomepageHeader />
      <HomepageSpotLights />
    </div>
  );
}
