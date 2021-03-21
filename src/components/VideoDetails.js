import React, { useState, useEffect } from 'react';
import { commentHistory } from '../comments';
import getVideoData from '../services/youtubeAPI';

const VideoDetails = ({ setComments }) => {
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    const getFormattedVideoData = async () => {
      const data = await getVideoData();
      setVideoData({ ...data.items[0].snippet, ...data.items[0].statistics });
    };

    getFormattedVideoData();
    setComments(commentHistory);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className='videoInfoWrapper'>
        <div className='videoDetails'>
          <div className='videoTitle'>{videoData.title}</div>

          <div className='middleLine'>
            <div className='left'>
              <span className='views'>{videoData.viewCount} views </span>
              <span>-</span>
              <span className='publishDate'>{videoData.publishedAt}</span>
            </div>
            <div className='right'>
              <span className='likes'>
                <i className='fas fa-thumbs-up'></i>
                {videoData.likeCount}
              </span>
              <span className='dislikes'>
                <i className='fas fa-thumbs-down'></i>
                {videoData.dislikeCount}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='videoDescriptionWrapper'>
        <div className='videoDescription'>
          <div className='textDescription'>
            <p>
              <strong>Description:</strong>
            </p>
            <p>{videoData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
