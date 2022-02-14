import React, { useState, useEffect } from 'react';
import 'react-router-dom';

import NewVideoForm from './NewVideoForm.js'
import GenreContainer from './GenreContainer.js'
import RentedVideos from './RentedVideos.js'


function App() {
  const [showForm, setShowForm] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/movies')
      .then(r => r.json())
      .then(data => setMovies(data))
  }, [])

  function onRentMovie(rentedMovie) {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === rentedMovie.id) {
        return rentedMovie
      } else {
        return movie
      }
    })
    setMovies(updatedMovies)
  }

  function onNewMovie(newMovie) {
    const newMovieArray = [...movies, newMovie]
    setMovies(newMovieArray)
  }

  function onDeleteMovie(deletedMovie) {
    const newMovieArray = movies.filter((movie) => movie.id !== deletedMovie.id)
    setMovies(newMovieArray)
    alert(`You have deleted ${deletedMovie.title}`)
  }

  return (
    <div className="App">
      <header id="header">
        <h1>GENERIC VIDEO STORE</h1>
        <button className="button" onClick={(e) => setShowForm(!showForm)}>
          {showForm ? "Hide Form" : "Show New Movie Form"}
        </button>
        {showForm ? <NewVideoForm onNewMovie={onNewMovie}/> : null}
        {movies !== [] ? <GenreContainer movies={movies} onRentMovie={onRentMovie} onDeleteMovie={onDeleteMovie}/> : null}
        <RentedVideos movies={movies}/>
      </header>
    </div>
  );
}

export default App;
