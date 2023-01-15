import React from 'react';
import PropTypes from 'prop-types';

function Filter({ count, placeholder, stateChanger }) {
  // Updates parent filter
  const handleOnChange = (e) => {
    stateChanger(e.target.value.toLowerCase());
  };

  return (
    <>
      <span>{ count }</span>
      <input type="text" placeholder={placeholder} onChange={handleOnChange} />
    </>
  );
}

Filter.propTypes = {
  count: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  stateChanger: PropTypes.func.isRequired,
};

export default Filter;
