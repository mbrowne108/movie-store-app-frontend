import React from 'react';

function RentedVideos({ movies }) {
    const filteredMovies = movies.filter((movie) => movie.rented === true)
    return (
        <div className="container">
            <h3>Rented Videos List</h3>
            <ul>
                {filteredMovies.map((movie) => <li className="rented-lists">{movie.title}</li>)}
            </ul>
        </div>
    )
}

export default RentedVideos;