import React from 'react';
import { DateTime } from 'luxon';

const Comment = ({ comment }) => {
  const formattedDate = (dateObject) => {
    const lifetimeInDays = Math.floor(
      DateTime.now().diff(dateObject, 'days').days
    );
    if (lifetimeInDays < 1) {
      return 'Today';
    }
    if (lifetimeInDays < 2) {
      return `${lifetimeInDays} day ago`;
    }
    if (lifetimeInDays < 7) {
      return `${lifetimeInDays} days ago`;
    } else {
      return `${dateObject.toLocaleString(DateTime.DATE_MED)}`;
    }
  };

  return (
    <div className='centerWrapper'>
      <div className='comment'>
        <div className='firstLine'>
          <div className='username'>{comment.userName}</div>
          <div className='publishedAt'>{formattedDate(comment.postedWhen)}</div>
        </div>
        <div className='commentContent'>{comment.commentContent}</div>
      </div>
    </div>
  );
};

export default Comment;
