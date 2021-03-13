import React, { useState } from 'react';
import './App.scss';
import Nav from './components/Nav';
import Video from './components/Video.js';
import Background from './components/Background';
import VideoDetails from './components/VideoDetails';
import CommentWriting from './components/CommentWriting';
import CommentList from './components/CommentList';
import Signin from './components/Signin';

function App() {
  const [isSignedin, setIsSignedIn] = useState(false);
  const [route, setRoute] = useState('signin');
  const [userInput, setUserInput] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([]);

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
          <VideoDetails setComments={setComments} />
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
