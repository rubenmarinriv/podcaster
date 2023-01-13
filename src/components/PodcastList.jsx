import React from 'react';
import PropTypes from 'prop-types';
import PodcastItem from './PodcastItem';

function PodcastList({ podcasts, filter }) {
  const filteredPodcasts = podcasts.filter((podcast) => (
    podcast['im:artist'].label.toLowerCase().includes(filter.toLowerCase())
    || podcast['im:name'].label.toLowerCase().includes(filter.toLowerCase())
  ));
  const listItems = filteredPodcasts.map((podcast) => (
    <PodcastItem
      key={podcast.id.attributes['im:id'].toString()}
      image={podcast['im:image'][2].label}
      title={podcast['im:name'].label}
      author={podcast['im:artist'].label}
    />
  ));

  return (
    <ul className="Feed">
      { listItems }
    </ul>
  );
}

PodcastList.propTypes = {
  podcasts: PropTypes.arrayOf(Object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default PodcastList;
