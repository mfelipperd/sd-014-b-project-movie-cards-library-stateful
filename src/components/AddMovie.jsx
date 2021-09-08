import React, { Component } from 'react';
import InputLabel from './InputLabel';

export default class AddMovie extends Component {
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
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputLabel
          text="Título"
          id="input-text"
          name="title"
          value={ title }
          onChange={ this.changeInput }
          type="text"
          labelTestId="title-input-label"
          inputTestId="title-input"
        />
        <InputLabel
          text="Subtítulo"
          id="input-subtitle"
          name="subtitle"
          value={ subtitle }
          onChange={ this.changeInput }
          type="text"
          labelTestId="subtitle-input-label"
          inputTestId="subtitle-input"
        />
        <InputLabel
          text="Imagem"
          id="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ this.changeInput }
          type="text"
          labelTestId="image-input-label"
          inputTestId="image-input"
        />
        <label htmlFor="textarea-storyline" data-testid="storyline-input-label">
          <p>Sinopse</p>
          <textarea
            data-testid="storyline-input"
            id="textarea-storyline"
            name="storyline"
            value={ storyline }
            onChange={ this.changeInput }
          />
        </label>
        <InputLabel
          text="Avaliação"
          id="rating-input"
          name="rating"
          value={ rating }
          onChange={ this.changeInput }
          type="number"
          labelTestId="rating-input-label"
          inputTestId="rating-input"
        />
        <label htmlFor="" data-testid="genre-input-label">
          <p>Gênero</p>
          <select name="genre" id="" value={ genre } data-testid="genre-input" onChange={ this.changeInput }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}
