import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="sub" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="addSubtitle"
          type="text"
          id="sub"
          data-testid="subtitle-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AddMovieSubtitle;
