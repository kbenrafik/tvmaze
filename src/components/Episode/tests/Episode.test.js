import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Episode from '../';
import EpisodeModel from '../../../client/endPoints/Episode/EpisodeModel';

test('should return null', () => {
  const tree = renderer
    .create(<Episode/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('should render episode', () => {
  const mockEpisode = new EpisodeModel({
    id: 1,
    summary: 'this is summary',
    name: 'episode name',
    image: {
      medium: '/link/image'
    }
  });
  const tree = renderer
    .create(<Router>
      <Episode episode={mockEpisode} idShow="659"/>
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});