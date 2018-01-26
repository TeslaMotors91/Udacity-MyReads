import React from 'react';
import PropTypes from 'prop-types';

// A constant to handle the Title of the ListBooks container/screen
const Title = props => {
  return (
    <div className="list-books-title">
      <h1>{props.name}</h1>
    </div>
  );
};

Title.defaultProps = {
  name: 'My Reads'
};

Title.propTypes = {
  name: PropTypes.string.isRequired
};

export default Title;
