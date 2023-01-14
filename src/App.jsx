import React, { useState, useEffect } from 'react';
import moment from 'moment/moment';
import List from './components/Feed/List';
import Filter from './components/Feed/Filter';
import './App.css';

function App() {
  const [feed, setFeed] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Updates the feed when it is not saved or more than a day has passed since the last save
    const storedFeed = JSON.parse(localStorage.getItem('feed'));
    const daysSinceFetched = storedFeed !== null
      ? moment().diff(moment(storedFeed.fetchDate), 'days') : 0;

    const fetchFeed = async () => {
      try {
        const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
        const data = await response.json();

        localStorage.setItem('feed', JSON.stringify(Object.assign(data.feed, {
          fetchDate: new Date(),
        })));
        setFeed(data.feed);
      } catch (error) {
        console.error(error);
      }
    };

    if (storedFeed !== null && daysSinceFetched < 1) {
      setFeed(storedFeed);
    } else {
      fetchFeed();
    }
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
