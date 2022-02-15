import React from 'react';
import MovieCard from './MovieCard.js'

function GenreContainer({ movies, genres, onRentMovie, onDeleteMovie }) {
    return (
        <div className="row">
            <br/>
            {genres.map((genre) => 
                <div key={genre.id} className="column">
                    <h3>{genre.name}</h3>
                    <ul>
                        {movies.filter((movie) => movie.genre_id === genre.id)
                            .map((movie) => <MovieCard key={movie.id} movie={movie} onRentMovie={onRentMovie} onDeleteMovie={onDeleteMovie}/>)
                        }
                    </ul>
                </div>
            )}
        </div>
    );
}

export default GenreContainer;