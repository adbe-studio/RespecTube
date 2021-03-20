import React from 'react';

const Nav = ({ setRoute, isSignedin, setUserInput }) => {
  const signOut = () => {
    setUserInput('');
    setRoute('signin');
  };

  return (
    <div className='container'>
      <nav className='navbar'>
        <div className='logo'>
          <h1>
            <i className='fab fa-pied-piper-alt'></i>RespecTube
          </h1>
        </div>
        <div className='login'>
          {isSignedin ? (
            <span onClick={signOut} data-testid='signOut' className='signOut'>
              Sign Out
            </span>
          ) : (
            <span
              onClick={() => setRoute('signin')}
              data-testid='signIn'
              className='signIn'
            >
              Sign In
            </span>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
