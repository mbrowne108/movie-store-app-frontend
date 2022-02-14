import React from 'react';
import MovieCard from './MovieCard.js'

function GenreContainer({ movies, onRentMovie, onDeleteMovie }) {
    const genres = movies.map((movie) => movie.genre.name)
    const uniqueGen = [...new Set(genres)]

    return (
        <div className="row">
            <br/>
            {uniqueGen.map((gen) => 
                <div className="column">
                    <h3>{gen}</h3>
                    <ul>
                        {movies.filter((movie) => movie.genre.name === gen)
                            .map((movie) => <MovieCard key={movie.id} movie={movie} onRentMovie={onRentMovie} onDeleteMovie={onDeleteMovie}/>)
                        }
                    </ul>
                </div>
            )}
        </div>
    );
}

export default GenreContainer;