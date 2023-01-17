import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

function Item({
  link, image, title, author,
}) {
  return (
    <Col className="my-5 text-center text-break" xs={3}>
      <Link
        className="d-block position-relative mt-5 pt-5 pb-3 px-3 text-decoration-none border border-light-subtle shadow-sm"
        to={link}
      >
        <div
          className="position-absolute top-0 start-50 translate-middle border border-light-subtle rounded-circle"
          style={{
            width: '170px',
            height: '170px',
            backgroundImage: `url(${image})`, // Done with background-image because some images are rectangular
            backgroundSize: 'contain',
          }}
        />
        <h2 className="mt-5 fs-6 text-uppercase text-black">{title}</h2>
        <h3 className="fs-6 fw-normal text-secondary">
          Author:
          {' '}
          {author}
        </h3>
      </Link>
    </Col>
  );
}

Item.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Item;
