import React from 'react';

const CommentAlert = ({ displayAlert }) => {
  return (
    <div className={displayAlert ? 'commentAlert' : 'hide'}>
      <p className='alertText'>
        <i className='fas fa-radiation' />
        Abusive terms detected, your comment was not published
      </p>
    </div>
  );
};

export default CommentAlert;
