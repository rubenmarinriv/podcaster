import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import List from './List';
import feedSample from '../../../data/feed';

const { feed } = feedSample;

beforeEach(() => {
  render(
    <Router>
      <List array={feed.entry} />
    </Router>,
  );
});

test('it should render List component', async () => {
  expect(screen.getByTestId('feed-list')).toBeInTheDocument();
});

test('it should have 10 children', async () => {
  expect(screen.getByTestId('feed-list').children).toHaveLength(10);
});
