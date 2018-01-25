// Dependency import
import React from 'react';
import { Route } from 'react-router-dom';

// Local imports
import ListBooks from './containers/ListBooks';
import SearchBooks from './containers/SearchBooks';
import './App.css';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListBooks} />
        <Route path="/search" component={SearchBooks} />
      </div>
    );
  }
}

export default BooksApp;
