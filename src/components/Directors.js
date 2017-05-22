import React from 'react';
import { directors } from '../data';

const allDirectors = directors.map(director => {
  return(
    <div>
      <h3>Name: {director.name}</h3>
      <ul>{director.movies.map(movie => {return(<li>{movie}</li>)})}</ul>
    </div>
  )
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>);
}

export default Directors
