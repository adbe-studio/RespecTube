import React from 'react';

const VideoDetails = ({ videoSnippet, videoStatistics }) => {
  return (
    <div>
      <div className='videoInfoWrapper'>
        <div className='videoDetails'>
          <div className='videoTitle'>{videoSnippet.title}</div>

          <div className='middleLine'>
            <div className='left'>
              <span className='views'>{videoStatistics.viewCount} views </span>
              <span>-</span>
              <span className='publishDate'>{videoSnippet.publishedAt}</span>
            </div>
            <div className='right'>
              <span className='likes'>
                <i className='fas fa-thumbs-up'></i>
                {videoStatistics.likeCount}
              </span>
              <span className='dislikes'>
                <i className='fas fa-thumbs-down'></i>
                {videoStatistics.dislikeCount}
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
            <p>{videoSnippet.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
