import React from 'react';

class Select extends React.Component {

  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select" data-testid="select-input-label">
        Filtrar por gênero
        <select
          data-testid="select-input"
          name="select"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>

    );
  }
}

export default Select;
