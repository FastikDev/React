import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [dimentions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
    const handleResize = event => {
      const { innerWidth, innerHeight } = event.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { width, height } = dimentions;
  return <div className="dimentions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
