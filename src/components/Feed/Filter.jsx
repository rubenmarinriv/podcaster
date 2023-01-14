import React from 'react';
import PropTypes from 'prop-types';

function Filter({ placeholder, stateChanger }) {
  // Updates parent filter
  const handleOnChange = (e) => {
    stateChanger(e.target.value);
  };

  return (
    <input type="text" placeholder={placeholder} onChange={handleOnChange} />
  );
}

Filter.propTypes = {
  placeholder: PropTypes.string.isRequired,
  stateChanger: PropTypes.func.isRequired,
};

export default Filter;
