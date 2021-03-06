import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import loading from '../assets/loading.gif';

const Video = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='second-wrapper'>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          width='100%'
          height='100%'
          controls
          url='https://youtu.be/zABG-oJzkJ0?t=203'
          onReady={() => setIsLoading(false)}
        />
        {isLoading ? (
          <div className='loadingLogo'>
            <img src={loading} alt='Loading...' />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Video;
