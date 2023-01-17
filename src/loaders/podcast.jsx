import moment from 'moment/moment';
import config from '../config';

export default async (podcastId) => {
  // Gets the podcast when it is not saved or more than a day has passed since the last save
  const storedPodcast = JSON.parse(localStorage.getItem(podcastId));
  const daysSinceFetched = storedPodcast !== null
    ? moment().diff(moment(storedPodcast.fetchDate), 'days') : 0;

  const getPodcast = async () => {
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/${config.podcastUrl}?entity=podcastEpisode&id=${podcastId}`);
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem(podcastId, JSON.stringify(Object.assign(data, {
          fetchDate: moment().format(),
        })));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getPodcastDescription = async () => {
    // Podcast description is returned in separate XML
    try {
      const obj = JSON.parse(localStorage.getItem(podcastId));

      if (obj !== null) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/${obj.results[0].feedUrl}`);
        const text = await response.text();
        const xml = new window.DOMParser().parseFromString(text, 'text/xml');

        if (response.ok) {
          obj.results[0].description = xml.getElementsByTagName('description')[0].textContent;
          localStorage.setItem(podcastId, JSON.stringify(obj));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (storedPodcast === null || daysSinceFetched > 1) {
    await getPodcast();
    await getPodcastDescription();
  }
  return JSON.parse(localStorage.getItem(podcastId));
};
