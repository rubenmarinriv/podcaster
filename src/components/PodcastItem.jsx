import React from 'react';
import PropTypes from 'prop-types';

function PodcastItem({ image, title, author }) {
  return (
    <li>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <span>
        Author:
        {' '}
        {author}
      </span>
    </li>
  );
}

PodcastItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default PodcastItem;
