import React from 'react';

class AddMovie extends React.Component {
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
