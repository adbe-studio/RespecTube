import React, { Fragment, useState } from 'react';
import postTextToApi from '../parraleldotsApi';
import { DateTime } from 'luxon';
import CommentAlert from './CommentAlert';

const CommentWriting = ({
  commentInput,
  setCommentInput,
  comments,
  userInput,
  setComments,
}) => {
  const [blink, setBlink] = useState(0);
  const [displayAlert, setDisplayAlert] = useState(false);

  const inputTextHandler = (e) => {
    setCommentInput(e.target.value);
  };

  const submitComment = () => {
    const newId = Math.round(Math.random() * 10 ** 9);
    const newComment = {
      userName: userInput,
      commentContent: commentInput,
      postedWhen: DateTime.now(),
      id: newId,
    };
    setComments([newComment, ...comments]);
    setCommentInput('');
  };

  const alertAbuse = () => {
    setDisplayAlert(true);
  };

  const testComment = async () => {
    setDisplayAlert(false);
    try {
      const res = await postTextToApi(commentInput);
      const resData = res.data;
      resData.neither > 0.5 ? submitComment() : alertAbuse();
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <Fragment>
      <div className='centerWrapper'>
        <div className='numberOfComments'>{comments.length} Comments</div>
        <div className='AddCommentSection'>
          <div className='firstLine'>
            <div className='userName'>
              <span>{userInput}</span>
            </div>
            <input
              type='text'
              placeholder='Add a comment here...'
              className='newComment'
              value={commentInput}
              onChange={inputTextHandler}
            />
          </div>
          <div className='Btns'>
            <CommentAlert
              displayAlert={displayAlert}
              setDisplayAlert={setDisplayAlert}
            />
            <button
              onClick={() => setBlink(1)}
              onAnimationEnd={() => setBlink(0)}
              blink={blink}
              className='cancelBtn'
            >
              CANCEL
            </button>
            <button
              onClick={() => {
                setBlink(2);
                testComment();
              }}
              onAnimationEnd={() => setBlink(0)}
              blink={blink}
              className='addCommentBtn'
            >
              COMMENT
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CommentWriting;
