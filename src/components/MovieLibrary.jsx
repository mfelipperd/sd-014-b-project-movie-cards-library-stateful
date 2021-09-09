import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // bookmarkedOnly: false,
    };
  }

troquei = () => {
  // Adicionar state da AddMovie dentro do array de filmes....
}

render() {
  const { movies } = this.props;
  return (
    <div>
      <h2> My awesome movie library </h2>
      <SearchBar />
      <MovieList movies={ movies } />
      <AddMovie onClick={ this.troquei } />
    </div>
  );
}
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  // bookmarkedOnly: PropTypes.bool.isRequired,
};

export default MovieLibrary;
