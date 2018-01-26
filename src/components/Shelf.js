import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Shelf extends Component {
  render() {
    const { title, books, onShelfChange, onRatingChange } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (
              <Book
                key={index}
                book={book}
                onShelfChange={onShelfChange}
                onRatingChange={onRatingChange}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired
};

export default Shelf;
