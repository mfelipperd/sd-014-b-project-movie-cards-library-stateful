import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="text" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          onChange={ handleChange }
          value={ title }
          nome="Title"
          id="Title"
        />
      </label>
    );
  }
}

InputTitle.propTypes = PropTypes.shape({
  value: PropTypes.string,
  handleChance: PropTypes.func,
}).isRequired;

export default InputTitle;
