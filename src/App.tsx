import React, { useState } from 'react';
import {Movie} from "./types";
import MovieForm from './components/MovieForm/MovieForm';

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

  const editMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)

  }



  return (
    <div>
      <input
        type="text"
        value={movieTitle}
        onChange={(event) => setMovieTitle(event.target.value)}
      />
      <button onClick={addMovie}>Add Movie</button>
      <MovieForm movies={movies} onDelete={deleteMovie} onEdit={editMovie}/>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
