import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('grid avatar', () => {
  const { getByText } = render(<App />);
  const avatarElement = getByText(/Avatar/i);
  expect(avatarElement).toBeInTheDocument();
});
