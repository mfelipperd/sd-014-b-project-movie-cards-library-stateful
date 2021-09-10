// implement AddMovie component here

// Consultei o repositório do Bruno Trindade para entender como refatorar meu código e usar menas linhas no render
// Link -> https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/13/files
import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import SelectGenre from './SelectGenre';
import InputTextArea from './InputTextArea';
import InputNumber from './InputNumber';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.restore = this.restore.bind(this);
  }

  handleInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  restore() {
    // event.preventDefault();
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
        <InputText
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          handleChange={ this.handleInputChange }
        />
        <InputTextArea
          storyline={ storyline }
          handleChange={ this.handleInputChange }
        />
        <InputNumber
          rating={ rating }
          handleChange={ this.handleInputChange }
        />
        <SelectGenre
          describe="Gênero"
          id="genre"
          name="genre"
          value={ genre }
          testid="genre-input"
          testidLabel="genre-input-label"
          handleChange={ this.handleInputChange }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.restore }
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
