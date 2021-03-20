import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Nav from '../components/Nav';

it(`should show 'Sign Out' if user signed in`, function () {
  render(<Nav isSignedin={true} />);
  const navText = screen.getByTestId('signOut');
  expect(navText).toBeInTheDocument();
});

it(`should show 'Sign In' if user signed in`, function () {
  render(<Nav isSignedin={false} />);
  const navText = screen.getByTestId('signIn');
  expect(navText).toBeInTheDocument();
});
