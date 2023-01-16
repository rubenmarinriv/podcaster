import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Item from '../Item/Item';

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
    <Row data-testid="feed-list">
      {listItems}
    </Row>
  );
}

List.propTypes = {
  array: PropTypes.arrayOf(Object).isRequired,
};

export default List;
