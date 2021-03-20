import React from 'react';

const Signin = ({ setRoute, setIsSignedIn, setUserInput, userInput }) => {
  const onSubmit = () => {
    // eslint-disable-next-line eqeqeq
    if (!userInput == '') {
      setIsSignedIn(true);
      setRoute('home');
    } else {
      alert('You must enter a value');
    }
  };

  return (
    <div className='center'>
      <div className='formBox'>
        <div className='form'>
          <h1>Sign In</h1>
          <div className='section'>
            <div className='title'>Nickname</div>
            <input
              className='userNameInput'
              type='text'
              placeholder='Type a nickname'
              onChange={(e) => setUserInput(e.target.value)}
              required
            />
          </div>
          <div className='section'>
            <button
              className='signIn'
              value='Sign in'
              type='submit'
              data-testid='submitBtn'
              onClick={onSubmit}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
