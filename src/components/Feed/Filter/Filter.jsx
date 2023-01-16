import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';

function Filter({ count, placeholder, stateChanger }) {
  // Updates parent filter
  const handleOnChange = (e) => {
    stateChanger(e.target.value.toLowerCase());
  };

  return (
    <Row data-testid="feed-filter">
      <Col className="mb-5 text-end">
        <Badge
          className="me-2 p-1 fs-6"
          bg="primary"
        >
          {count}
        </Badge>
        <Form.Control
          className="py-1 px-2 d-inline w-25"
          type="text"
          placeholder={placeholder}
          onChange={handleOnChange}
        />
      </Col>
    </Row>
  );
}

Filter.propTypes = {
  count: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  stateChanger: PropTypes.func.isRequired,
};

export default Filter;
