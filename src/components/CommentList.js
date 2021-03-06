import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  const commentComponent = comments.map((comment, i) => {
    return <Comment comment={comments[i]} key={comments[i].id} />;
  });

  return <div>{commentComponent}</div>;
};

export default CommentList;
