import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Thumbnail extends Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <div>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Thumbnail.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Thumbnail;
