import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Item({
  link, image, title, author,
}) {
  return (
    <li>
      <img src={image} alt="" />
      <h2>
        <Link to={link}>{title}</Link>
      </h2>
      <span>
        Author:
        {' '}
        {author}
      </span>
    </li>
  );
}

Item.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Item;
