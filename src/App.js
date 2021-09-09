import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.newMovie = this.newMovie.bind(this);
  }

  newMovie(state) {
    console.log(state);
  }

  render() {
    return (
      <>
        <header className="App">
          <Header />
        </header>
        <main>
          <MovieLibrary />
          <AddMovie onClick={ this.newMovie } />
        </main>
      </>
    );
  }
}

export default App;
