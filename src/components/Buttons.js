import React, { useState } from 'react';

const Buttons = ({ testComment, setCommentInput }) => {
  const [blink, setBlink] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setBlink(1);
          setCommentInput('');
        }}
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
  );
};

export default Buttons;
