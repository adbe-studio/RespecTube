import React, { Fragment, useState } from 'react';
import postTextToApi from '../parraleldotsApi';
import { DateTime } from 'luxon';
import CommentAlert from './CommentAlert';
import Buttons from './Buttons';

const CommentWriting = ({
  commentInput,
  setCommentInput,
  comments,
  userInput,
  setComments,
}) => {
  const [displayAlert, setDisplayAlert] = useState(false);

  const inputTextHandler = (e) => {
    setCommentInput(e.target.value);
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

  const submitComment = () => {
    const newId = Math.round(Math.random() * 10 ** 9);
    const newComment = {
      userName: userInput,
      commentContent: commentInput,
      postedWhen: DateTime.now(),
      id: newId,
      isNew: true,
    };
    setComments([newComment, ...comments]);
    setCommentInput('');
  };

  const alertAbuse = () => {
    setDisplayAlert(true);
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
            <Buttons
              testComment={testComment}
              setCommentInput={setCommentInput}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CommentWriting;
