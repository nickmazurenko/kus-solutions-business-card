interface SpotLightShapeProps {
  size?: string;
  position?: string;
  color?: string;
  blur?: string;
  opacity?: string;
  sticky?: boolean;
}

export default function SpotLightShape(props: SpotLightShapeProps) {
  const {
    size = '300px',
    position = 'top-10',
    color = 'red',
    opacity = '50%',
    blur = '192px',
    sticky = false
  } = props;
  return (
    <div className={`absolute ${position} ${sticky ? 'sticky' : ''}`}>
      <div
        style={{
          backgroundColor: color,
          width: size,
          height: size,
          filter: `blur(${blur})`,
          opacity
        }}
        className='rounded-full'
      ></div>
    </div>
  );
}
