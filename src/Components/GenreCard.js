import React from 'react';

import MovieCard from './MovieCard.js'

function GenreCard({ genre, onRentMovie, onDeleteMovie }) {
    return (
        <div className="column">
            <h3>{genre.name}</h3>
            <ul>
                {genre.movies.map((movie) => <MovieCard key={movie.id} movie={movie} onRentMovie={onRentMovie} onDeleteMovie={onDeleteMovie}/>)}
            </ul>
        </div>
    )
}

export default GenreCard;