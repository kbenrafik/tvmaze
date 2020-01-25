import React from 'react';
import { render } from '@testing-library/react';
import ShowPage from '../ShowPage';

test('renders <ShowPage />', () => {
  const tree = render(<ShowPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
