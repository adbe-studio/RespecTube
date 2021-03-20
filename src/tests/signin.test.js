import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Signin from '../components/Signin';

it('renders correcly', function () {
  render(<Signin onChange={() => {}} />);
  const input = screen.getByPlaceholderText('Type a nickname');
  const submitBtn = screen.getByTestId('submitBtn');
  expect(input).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
});

describe('Input value', () => {
  it('updates on change', () => {
    render(<Signin onChange={() => {}} setUserInput={() => {}} />);
    const input = screen.getByPlaceholderText('Type a nickname');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});

describe('Search button', () => {
  describe('with input', () => {
    it('triggers signin state change', () => {
      const setIsSignedIn = jest.fn();
      render(
        <Signin
          setIsSignedIn={setIsSignedIn}
          userInput={'test'}
          onChange={() => {}}
          setUserInput={() => {}}
          setRoute={() => {}}
        />
      );
      const submitBtn = screen.getByTestId('submitBtn');
      fireEvent.click(submitBtn);
      expect(setIsSignedIn).toHaveBeenCalled();
    });
  });

  describe('with no input', () => {
    it('does not trigger signin state change', () => {
      const setIsSignedIn = jest.fn();
      jest.spyOn(window, 'alert').mockImplementation(() => {}); //Mocking window.alert funtion to avoid error

      render(<Signin setIsSignedIn={setIsSignedIn} userInput={''} />);
      const submitBtn = screen.getByTestId('submitBtn');
      fireEvent.click(submitBtn);
      expect(setIsSignedIn).not.toHaveBeenCalled();
    });
  });
});
