import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';

class JuntaInputs extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, funcao } = this.props;
    return (
      <>
        <InputText
          label="title-input-label"
          labelText="Título"
          value={ title }
          Name="title"
          dataTest="title-input"
          func={ funcao }
        />
        <InputText
          label="subtitle-input-label"
          labelText="Subtítulo"
          value={ subtitle }
          Name="subtitle"
          dataTest="subtitle-input"
          func={ funcao }
        />
        <InputText
          label="image-input-label"
          labelText="Imagem"
          value={ imagePath }
          Name="imagePath"
          dataTest="image-input"
          func={ funcao }
        />
        <label
          data-testid="storyline-input-label"
          htmlFor="storyline-input-label"
        >
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            onChange={ funcao }
            value={ storyline }
            cols="30"
            rows="10"
          />
        </label>
      </>
    );
  }
}

JuntaInputs.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default JuntaInputs;
