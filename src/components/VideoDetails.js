import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
import { commentHistory } from '../comments';

const VideoDetails = ({ setComments }) => {
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    const videoId = 'zABG-oJzkJ0';
    const apiKey = process.env.REACT_APP_YT_API_KEY;
    const fetchUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${apiKey}`;

    const getVideoData = async () => {
      try {
        const { data } = await axios.get(fetchUrl);
        formatApiResponse(data);
        setVideoData({ ...data.items[0].snippet, ...data.items[0].statistics });
      } catch (err) {
        console.error(err);
      }
    };
    getVideoData();
    setComments(commentHistory);
  }, []);

  const formatApiResponse = (data) => {
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    // DATE FORMAT
    const dateObject = DateTime.fromISO(data.items[0].snippet.publishedAt);
    const newFormat = dateObject.toLocaleString(DateTime.DATE_MED);
    data.items[0].snippet.publishedAt = newFormat;

    // ADDING COMAS TO THOUSANDS
    const { viewCount, likeCount, dislikeCount } = data.items[0].statistics;
    data.items[0].statistics.viewCount = numberWithCommas(viewCount);
    data.items[0].statistics.likeCount = numberWithCommas(likeCount);
    data.items[0].statistics.dislikeCount = numberWithCommas(dislikeCount);
  };

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
