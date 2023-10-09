import SpotLightShape from '../SpotLightShape/SpotLightShape';

export default function HomepageSpotLights() {
  return (
    <div className="w-full h-full">
      <SpotLightShape
        size="300px"
        color="cyan"
        sticky
        position="top-[60%] translate-x-[-150px]"
        opacity="20%"
        blur="80px"
      />
      <SpotLightShape
        size="300px"
        color="orange"
        sticky
        position="top-0 translate-x-[80%]"
        opacity="20%"
        blur="80px"
      />
    </div>
  );
}
