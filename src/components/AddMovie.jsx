import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Genre from './InputsApp/Genre';
import ImagePath from './InputsApp/ImagePath';
import Storyline from './InputsApp/StoryLine';
import Subtitle from './InputsApp/Subtitle';
import Title from './InputsApp/Title';
import RatingInput from './InputsApp/RatingInput';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  resetValues = () => {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          title={ title }
          onChange={
            ({ target: { value } }) => { this.setState({ title: value }); }
          }
        />
        <Subtitle
          subtitle={ subtitle }
          onChange={
            ({ target: { value } }) => { this.setState({ subtitle: value }); }
          }
        />
        <ImagePath
          imagePath={ imagePath }
          onChange={
            ({ target: { value } }) => { this.setState({ imagePath: value }); }
          }
        />
        <Storyline
          storyline={ storyline }
          onChange={
            ({ target: { value } }) => { this.setState({ storyline: value }); }
          }
        />
        <RatingInput
          rating={ rating }
          onChange={
            ({ target: { value } }) => { this.setState({ rating: Number(value) }); }
          }
        />
        <Genre
          genre={ genre }
          onChange={ ({ target: { value } }) => { this.setState({ genre: value }); } }
        />
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.resetValues }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
