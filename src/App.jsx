import React, { useState, useEffect } from 'react';
import PodcastList from './components/PodcastList';
import './App.css';

function App() {
  const [podcasts, setPodcasts] = useState(null);

  const fetchFeed = async () => {
    const { feed } = await (
      await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    ).json();

    setPodcasts(feed.entry);
  };

  useEffect(() => {
    if (podcasts === null) {
      fetchFeed();
    }
  });

  return (
    <div className="App">
      {
        podcasts && (
          <PodcastList podcasts={podcasts} />
        )
      }
    </div>
  );
}

export default App;
