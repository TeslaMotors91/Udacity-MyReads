import React from 'react';
import { Link } from 'react-router-dom';

// A constant variable to handle the navigation to search
const AddBook = () => {
  return (
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  );
};

export default AddBook;
