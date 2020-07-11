import React from 'react';
import { actors } from '../data';

const Actors = () => {

  function renderMovies(actor){
    return actor.movies.map(movie => {
      return <li>{movie}</li>
    })
  }

  function renderActors(){
    return actors.map(actor => {
      return (
        <div>
          <h3>{actor.name}</h3>
          <ul>{renderMovies(actor)}</ul>
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
