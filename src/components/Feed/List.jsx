import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function List({ array }) {
  const listItems = array.map((element) => (
    <Item
      key={element.id.attributes['im:id'].toString()}
      link={`podcast/${element.id.attributes['im:id'].toString()}`}
      image={element['im:image'][2].label}
      title={element['im:name'].label}
      author={element['im:artist'].label}
    />
  ));

  return (
    <ul className="Feed">
      { listItems }
    </ul>
  );
}

List.propTypes = {
  array: PropTypes.arrayOf(Object).isRequired,
};

export default List;
