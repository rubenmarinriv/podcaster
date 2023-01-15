import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import getFeed from '../feed';
import List from '../components/Feed/List';
import Filter from '../components/Feed/Filter';

const loader = async () => {
  const feed = await getFeed();
  return { feed };
};

function Root() {
  const { feed } = useLoaderData();
  const [filter, setFilter] = useState('');

  const filteredFeed = feed.entry.filter((element) => (
    element['im:artist'].label.toLowerCase().includes(filter)
    || element['im:name'].label.toLowerCase().includes(filter)
  ));

  return (
    <div>
      {
        feed && (
          <Container>
            <Filter
              count={filteredFeed.length}
              placeholder="Filter podcasts..."
              stateChanger={setFilter}
            />
            <List array={filteredFeed} filter={filter} />
          </Container>
        )
      }
    </div>
  );
}

export { loader, Root };
