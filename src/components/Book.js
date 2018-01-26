import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatings from './common/StarRatings';

import noCoverImage from '../images/cover_unavailable.gif';

// A class to handle the book component for ListBooks and SearchBooks
class Book extends Component {
  constructor(props) {
    super(props);

    this.changeRating = this.changeRating.bind(this);
    this.state = {
      rating: 0
    };
  }

  changeRating(rating) {
    this.setState({
      rating: rating
    });
  }

  render() {
    const { book, onShelfChange, onRatingChange } = this.props;

    return (
      <div className="book">
        <div className="my-rating">
          <p style={{ fontSize: 12 }}> My Rating</p>
          <StarRatings
            rating={book.rating}
            isSelectable={true}
            starRatedColor={'rgb(50, 123, 53)'}
            isAggregateRating={false}
            changeRating={e => onRatingChange(book, e)}
            numOfStars={5}
            starWidthAndHeight={'15px'}
            starSpacing={'2px'}
          />
        </div>
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noCoverImage})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={e => onShelfChange(book, e.target.value)}
              value={book.shelf ? book.shelf : 'none'}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title ? book.title : ''}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
        <div className="average-rating">
          <StarRatings
            rating={book.averageRating ? book.averageRating : 0}
            isSelectable={false}
            isAggregateRating={true}
            starWidthAndHeight={'15px'}
            starSpacing={'2px'}
          />
          <b style={{ fontSize: 12 }}> {book.ratingsCount ? book.ratingsCount : 0}</b>
        </div>
      </div>
    );
  }
}

Book.propType = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func,
  onRatingChange: PropTypes.func
};

export default Book;
