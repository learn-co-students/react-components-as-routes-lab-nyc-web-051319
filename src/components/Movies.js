import React from 'react';
import { movies } from '../data';

const Movies = () => {

  function renderGenres(movie){
    return movie.genres.map(genre => {
      return <li>{genre}</li>
    })
  }

  function renderMovies(){
    return movies.map(movie => {
      return (
        <div>
          <h3>{movie.title}</h3>
          <p>{movie.time}</p>
          <ul>
            {renderGenres(movie)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
