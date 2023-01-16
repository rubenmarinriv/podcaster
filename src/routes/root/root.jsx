import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import getFeed from '../../loaders/feed';
import List from '../../components/Feed/List/List';
import Filter from '../../components/Feed/Filter/Filter';

const loader = async () => {
  const feed = await getFeed();
  return { feed };
};

function Root() {
  const { feed } = useLoaderData();
  const [filter, setFilter] = useState('');

  const applyFilter = (array) => array.entry.filter((element) => (
    element['im:artist'].label.toLowerCase().includes(filter)
      || element['im:name'].label.toLowerCase().includes(filter)
  ));

  return (
    <div data-testid="feed">
      {
        feed && (
          <Container>
            <Filter
              count={applyFilter(feed).length}
              placeholder="Filter podcasts..."
              stateChanger={setFilter}
            />
            <List array={applyFilter(feed)} />
          </Container>
        )
      }
    </div>
  );
}

export { loader, Root };
