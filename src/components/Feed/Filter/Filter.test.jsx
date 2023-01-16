import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './Filter';

beforeEach(() => {
  render(
    <Filter
      count={1}
      placeholder="Filter podcasts..."
      stateChanger={jest.fn}
    />,
  );
});

test('it should render Filter component', async () => {
  expect(screen.getByTestId('feed-filter')).toBeInTheDocument();
});

test('it should display the right count', async () => {
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('it should display the right placeholder', async () => {
  expect(screen.getByPlaceholderText('Filter podcasts...')).toBeInTheDocument();
});

test('it should allow text to be inputted', async () => {
  const input = screen.getByPlaceholderText('Filter podcasts...');

  fireEvent.change(input, {
    target: { value: 'Frosted' },
  });
  expect(input.value).toBe('Frosted');
});
