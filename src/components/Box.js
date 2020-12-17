import React from 'react';

const Box = ({ position, speed }) => {

  const [ angle, setAngle ] = React.useState(0);

  React.useEffect(() => {
    setAngle(angle + 360);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  return (
    <div
      className="box"
      style={{
        left: position.x + 'px',
        top: position.y + 'px',
        transitionDuration: speed + 's',
        transform: `rotate(${angle}deg)`
      }}
    ></div>
  );
}

export default Box;