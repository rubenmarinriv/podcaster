import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';

function Sidebar({
  image, title, author, description,
}) {
  return (
    <Col className="mb-5 text-break border border-light-subtle shadow-sm" xs={3}>
      <div className="mt-4 mb-3 pb-4 px-4 border-bottom border-light-subtle">
        <img
          className="w-100 border border-light-subtle"
          src={image}
          alt=""
        />
      </div>
      <div className="mb-4 pb-3 px-2 border-bottom border-light-subtle">
        <h2 className="fs-6 fw-bold">{title}</h2>
        <h3 className="fs-6 fst-italic">
          by
          {' '}
          {author}
        </h3>
      </div>
      { typeof description !== 'undefined'
        && (
        <h4 className="pb-3 fs-6">
          <span className="d-block mb-2">Description:</span>
          {' '}
          <span
            className="fst-italic text-secondary"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </h4>
        )}
    </Col>
  );
}

Sidebar.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Sidebar.defaultProps = {
  description: undefined,
};

export default Sidebar;
