import React, {useState} from 'react';
import {Movie} from './types';
import MovieForm from './components/MovieForm/MovieForm';
import Joke from './components/Jokes/Joke';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieTitle, setMovieTitle] = useState('');

  const addMovie = () => {
    if (movieTitle !== '') {
      const newMovie: Movie = {
        id: Math.random(),
        title: movieTitle,
      };
      setMovies(prevState => [...prevState, newMovie]);
    }
  };

  const deleteMovie = (index: number) => {
    setMovies(prevMovies => prevMovies.filter((movie) => movie.id === index));
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const moviesCopy = [...movies];
    const movieCopy = {...moviesCopy[index]};
    movieCopy.title = e.target.value
    moviesCopy[index] = movieCopy;
    setMovies(moviesCopy)
  }


  return (
    <div>
      <input
        type="text"
        value={movieTitle}
        onChange={(event) => setMovieTitle(event.target.value)}
      />
      <button onClick={addMovie}>Add Movie</button>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
        <MovieForm
          movies={movies}
          onDelete={deleteMovie}
          changeName={(e) =>
            onChangeName(e, 0)}
        />
      </ul>
      <Joke />
    </div>
  )
};

export default App;


