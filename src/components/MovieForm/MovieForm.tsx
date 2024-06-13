import React from 'react';
import { Movie } from '../../types';

interface MovieFormProps {
  movies: Movie[];
  onDelete: (id: number) => void;
  changeName?: React.ChangeEventHandler<HTMLInputElement>;
}

const MovieForm: React.FC<MovieFormProps> = ({ movies, onDelete, changeName }) => {

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <input
            type="text"
            value={movie.title}
            onChange={changeName}
          />
          <button onClick={() => onDelete(movie.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MovieForm;
