import React, { Component } from 'react';

import Title from '../components/common/Title';
import BookShelf from '../components/BookShelf';
import AddBook from '../components/AddBook';

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <Title />
        <BookShelf />
        <AddBook />
      </div>
    );
  }
}

export default ListBooks;
