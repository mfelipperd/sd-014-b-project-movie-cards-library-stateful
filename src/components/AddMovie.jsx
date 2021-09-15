// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class AddMovie extends Component {
  constructor() {
    super();
    const inicialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.state = inicialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <div>
          subtitle=
          { subtitle }
          imagePath=
          { imagePath }
          storyline=
          { storyline }
          rating=
          { rating }
          genre=
          { genre }
          onClick =
          { onClick }
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
