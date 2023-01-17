import React from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { loader as rootLoader, Root } from './root';
import feedSample from '../../data/feed';

const setup = (data) => {
  const routes = [
    {
      path: '/',
      element: <Root />,
      loader: () => data,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0,
  });

  const { container } = render(<RouterProvider router={router} />);
  return container;
};

test('it should get a feed from the loader', async () => {
  const { feed } = await rootLoader();
  expect(feed).toBeOneOf([null, expect.toBeObject()]);
});

test('it should render root route', async () => {
  setup(feedSample);
  await waitFor(() => screen.getByTestId('feed'));

  expect(screen.getByTestId('feed')).toBeInTheDocument();
});

test('it should have child elements when the feed is valid', async () => {
  setup(feedSample);
  await waitFor(() => screen.getByTestId('feed'));

  expect(screen.getByTestId('feed').children).toHaveLength(1);
});

test('it should not have child elements when the feed is invalid', async () => {
  setup({ feed: null });
  await waitFor(() => screen.getByTestId('feed'));

  expect(screen.getByTestId('feed').children).toHaveLength(0);
});
