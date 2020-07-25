import React from 'react';
import { render } from '@testing-library/react';
import Portfolio from './Portfolio';

test('grid avatar', () => {
  const { getByText } = render(<Portfolio />);
  const avatarElement = getByText(/Latest Achievements/i);
  expect(avatarElement).toBeInTheDocument();
});
