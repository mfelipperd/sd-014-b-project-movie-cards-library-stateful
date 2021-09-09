import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  changeState = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });

    this.conditional(target);
  }

  conditional = (target) => {
    if (target.name === 'bookmarkedOnly') this.filterMovies(target.checked);
    if (target.name === 'selectedGenre') this.filterGenre(target.value);
    if (target.name === 'searchText') this.filterTitle(target.value);
  }

  filterMovies = (value) => {
    const { movies } = this.props;
    const checkboxFunc = movies.filter(({ bookmarked }) => bookmarked === true);
    const confirmValueOfCheck = value === true ? checkboxFunc : movies;

    this.setState({
      movies: confirmValueOfCheck,
    });
  }

  filterGenre = (value) => {
    const { movies } = this.props;
    const getGenre = movies.filter(({ genre }) => genre === value);
    const confirmGenre = value === '' ? movies : getGenre;

    this.setState({
      movies: confirmGenre,
    });
  }

  filterTitle = (value) => {
    const { movies } = this.props;
    const getTitle = movies.filter(({ title, subtitle, storyline }) => (
      title.includes(value) || subtitle.includes(value) || storyline.includes(value)
    ));
    const confirmTitle = value === '' ? movies : getTitle;

    this.setState({
      movies: confirmTitle,
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeState }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.func.isRequired,
};

export default MovieLibrary;
