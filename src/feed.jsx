import moment from 'moment/moment';
import config from './config';

export default async () => {
  // Gets the feed when it is not saved or more than a day has passed since the last save
  const storedFeed = JSON.parse(localStorage.getItem('feed'));
  const daysSinceFetched = storedFeed !== null
    ? moment().diff(moment(storedFeed.fetchDate), 'days') : 0;

  const getFeed = async () => {
    try {
      const response = await fetch(config.feedUrl);
      const data = await response.json();

      localStorage.setItem('feed', JSON.stringify(Object.assign(data.feed, {
        fetchDate: moment().format(),
      })));
    } catch (error) {
      console.error(error);
    }
  };

  if (storedFeed === null || daysSinceFetched > 1) {
    await getFeed();
  }
  return JSON.parse(localStorage.getItem('feed'));
};
