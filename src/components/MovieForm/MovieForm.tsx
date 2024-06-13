import React from 'react';
import {Movie} from "../../types";

const MovieForm: React.FC<{
  movies: Movie[];
  onEdit: React.ChangeEventHandler<HTMLInputElement>
  onDelete: (id: number) => void;
}> = React.memo(({movies, onEdit, onDelete}) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <input type="text" value={movie.title} onChange={(event) => onEdit(event)}/>
          <button onClick={() => onDelete(movie.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
});

export default MovieForm;
