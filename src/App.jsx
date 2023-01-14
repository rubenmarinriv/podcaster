import React, { useState, useEffect } from 'react';
import List from './components/Feed/List';
import Filter from './components/Feed/Filter';
import './App.css';

function App() {
  const [feed, setFeed] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchFeed = async () => {
      const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
      const data = await response.json();

      setFeed(data.feed);
    };

    fetchFeed();
  }, []);

  return (
    <div className="App">
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

export default App;
