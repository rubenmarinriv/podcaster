import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Item from './Item';
import feedSample from '../../../data/feed';

const { feed } = feedSample;

beforeEach(() => {
  const element = feed.entry[0];

  render(
    <Router>
      <Item
        key={element.id.attributes['im:id'].toString()}
        link={`podcast/${element.id.attributes['im:id'].toString()}`}
        image={element['im:image'][2].label}
        title={element['im:name'].label}
        author={element['im:artist'].label}
      />
    </Router>,
  );
});

test('it should render Item component', async () => {
  expect(screen.getByText('Frosted Tips with Lance Bass')).toBeInTheDocument();
});

test('it should have the right link', async () => {
  expect(screen.getByText('Frosted Tips with Lance Bass').closest('a')).toHaveAttribute('href', '/podcast/1661154206');
});

test('it should have the right image', async () => {
  expect(screen.getByText('Frosted Tips with Lance Bass').previousElementSibling).toHaveAttribute('src', 'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/07/88/b3/0788b35f-1829-6fbd-2488-ecaf83b8d8ab/mza_9852863690630397024.jpg/170x170bb.png');
});

test('it should display the right title', async () => {
  expect(screen.getByText('Frosted Tips with Lance Bass')).toBeInTheDocument();
});

test('it should display the right author', async () => {
  expect(screen.getByText('iHeartPodcasts')).toBeInTheDocument();
});
