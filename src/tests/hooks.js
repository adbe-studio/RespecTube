import { useState } from 'react';

export const useSignIn = (initial) => {
  const [isSignedin, setIsSignedIn] = useState(initial);
  return [isSignedin, () => setIsSignedIn(true)];
};
