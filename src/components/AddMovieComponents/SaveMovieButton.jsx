import React from 'react';
import PropTypes from 'prop-types';

class SaveMovieButton extends React.Component {
  render() {
    const { onClick } = this.props; // A propriedade onClick do botão invoca uma função definida por você, em <AddMovie />
    return (
      <button
        data-testid="send-button"
        type="submit"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

SaveMovieButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SaveMovieButton;
