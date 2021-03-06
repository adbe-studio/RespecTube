import React from 'react';
import Particles from 'react-particles-js';

const Background = () => {
  return (
    <div className='background'>
      <Particles
        className='particles'
        height={'100%'}
        params={particleOptions}
      />
    </div>
  );
};

const particleOptions = {
  particles: {
    color: {
      value: '#FF85D8',
    },
    size: {
      random: true,
      value: 3,
    },
    links: {
      color: '#FF0000',
      distance: 200,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

export default Background;
