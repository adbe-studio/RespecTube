import React, { useState, useEffect } from 'react';
import './App.scss';
import Nav from './components/Nav';
import Video from './components/Video.js';
import Background from './components/Background';
import VideoDetails from './components/VideoDetails';
import CommentWriting from './components/CommentWriting';
import CommentList from './components/CommentList';
import axios from 'axios';
import { commentHistory } from './comments';
import Signin from './components/Signin';
import { DateTime } from 'luxon';

function App() {
  const [isSignedin, setIsSignedIn] = useState(false);
  const [route, setRoute] = useState('signin');
  const [userInput, setUserInput] = useState('');
  const [videoSnippet, setVideoSnippet] = useState({});
  const [videoStatistics, setVideoStats] = useState({});
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const videoId = 'zABG-oJzkJ0';
    const apiKey = process.env.REACT_APP_YT_API_KEY;
    const fetchUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${apiKey}`;

    const getVideoData = async () => {
      try {
        // console.log(DateTime.now().toLocaleString(DateTime.DATE_MED));
        const { data } = await axios.get(fetchUrl);
        onStartChangeApiFormat(data);
        setVideoSnippet(data.items[0].snippet);
        setVideoStats(data.items[0].statistics);
      } catch (err) {
        console.error(err);
      }
    };
    getVideoData();
    setComments(commentHistory);
  }, []);

  const onStartChangeApiFormat = (data) => {
    const numberWithCommas = (x) =>
      x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // DATE FORMAT
    const dateObject = DateTime.fromISO(data.items[0].snippet.publishedAt);
    const newFormat = dateObject.toLocaleString(DateTime.DATE_MED);
    data.items[0].snippet.publishedAt = newFormat;

    // ADDING COMAS TO THOUSANDS
    data.items[0].statistics.viewCount = numberWithCommas(
      data.items[0].statistics.viewCount
    );
    data.items[0].statistics.likeCount = numberWithCommas(
      data.items[0].statistics.likeCount
    );
    data.items[0].statistics.dislikeCount = numberWithCommas(
      data.items[0].statistics.dislikeCount
    );
  };

  return (
    <div className='App'>
      <Nav
        isSignedin={isSignedin}
        setRoute={setRoute}
        setUserInput={setUserInput}
      />
      <Background />
      {route === 'home' ? (
        <div>
          <Video />
          <VideoDetails
            videoSnippet={videoSnippet}
            videoStatistics={videoStatistics}
          />
          <CommentWriting
            commentInput={commentInput}
            setCommentInput={setCommentInput}
            comments={comments}
            userInput={userInput}
            setComments={setComments}
          />
          <CommentList comments={comments} />
        </div>
      ) : (
        <Signin
          setRoute={setRoute}
          setIsSignedIn={setIsSignedIn}
          setUserInput={setUserInput}
          userInput={userInput}
        />
      )}
    </div>
  );
}

export default App;
