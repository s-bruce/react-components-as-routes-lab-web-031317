import React from 'react';
import { movies } from '../data';

const allMovies = movies.map(movie => {
  return(
  <div>
    <h3>Title: {movie.title}</h3>
    <p>Time: {movie.time}</p>
    Genres: <ul>{movie.genres.map(genre => { return(<li>{genre}</li>)} )  }</ul>
  </div>)
})

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {allMovies}
    </div>);
};

export default Movies;
