import React from 'react';
import { directors } from '../data';

const Directors = () => {

  function renderMovies(director){
    return director.movies.map(movie => {
      return <li>{movie}</li>
    })
  }

  function renderDirectors(){
    return directors.map(director => {
      return (
        <div>
          <h3>{director.name}</h3>
          <ul>{renderMovies(director)}</ul>
        </div>
      )
    })
  }


  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
