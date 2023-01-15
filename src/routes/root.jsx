import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
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

  return (
    <div>
      {
        feed && (
          <>
            <Filter placeholder="Filter podcasts..." stateChanger={setFilter} />
            <List array={feed.entry} filter={filter} />
          </>
        )
      }
    </div>
  );
}

export { loader, Root };
