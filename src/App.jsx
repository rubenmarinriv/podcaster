import React, { useState, useEffect } from 'react';
import PodcastList from './components/PodcastList';
import PodcastFilter from './components/PodcastFilter';
import './App.css';

function App() {
  const [podcasts, setPodcasts] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchFeed = async () => {
      const { feed } = await (
        await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      ).json();

      setPodcasts(feed.entry);
    };

    fetchFeed();
  }, []);

  return (
    <div className="App">
      {
        podcasts && (
          <>
            <PodcastFilter placeholder="Filter podcasts..." stateChanger={setFilter} />
            <PodcastList podcasts={podcasts} filter={filter} />
          </>
        )
      }
    </div>
  );
}

export default App;
