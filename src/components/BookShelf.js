import React, { Component } from 'react';
import * as BooksAPI from '../utils/BooksAPI';

import Shelf from './Shelf';

// A class to manage the main content of ListBooks
class BookShelf extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      });
    });
  }

  onShelfChange = (book, shelf) => {
    const id = book.id;
    const currentBooks = [...this.state.books];
    const indexToUpdate = currentBooks.findIndex(book => book.id === id);
    const newBookToUpdate = Object.assign({}, currentBooks[indexToUpdate], {
      shelf: shelf
    });

    this.setState({
      books: [
        ...currentBooks.slice(0, indexToUpdate),
        newBookToUpdate,
        ...currentBooks.slice(indexToUpdate + 1)
      ]
    });

    BooksAPI.update(book, shelf);
  };

  // TODO: Make the rating state persistent after user refreshes the page
  onRatingChange = (book, rating) => {
    const id = book.id;
    const currentBooks = [...this.state.books];
    const indexToUpdate = currentBooks.findIndex(book => book.id === id);
    const newBookToUpdate = Object.assign({}, currentBooks[indexToUpdate], {
      rating: rating
    });

    this.setState({
      books: [
        ...currentBooks.slice(0, indexToUpdate),
        newBookToUpdate,
        ...currentBooks.slice(indexToUpdate + 1)
      ]
    });
  };

  render() {
    const { books } = this.state;

    let currentList = [];
    let wantList = [];
    let readList = [];

    books.forEach(book => {
      switch (book.shelf) {
        case 'currentlyReading':
          currentList.push(book);
          break;
        case 'wantToRead':
          wantList.push(book);
          break;
        case 'read':
          readList.push(book);
          break;
        default:
          break;
      }
    });

    const shelfList = [
      {
        name: 'Currently Reading',
        books: currentList
      },
      {
        name: 'Want To Read',
        books: wantList
      },
      {
        name: 'Read',
        books: readList
      }
    ];

    return (
      <div className="list-books-content">
        {books.length > 0 ? (
          <div>
            {shelfList.map((shelf, index) => (
              <Shelf
                key={index}
                title={shelf.name}
                books={shelf.books}
                onShelfChange={this.onShelfChange}
                onRatingChange={this.onRatingChange}
              />
            ))}
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    );
  }
}

export default BookShelf;
