import React from 'react';

function RentedVideos({ movies, onRentMovie }) {
    const filteredMovies = movies.filter((movie) => movie.rented === true)

    function handleRent(movie) {
        fetch(`http://localhost:9292/movies/${movie.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rented: !movie.rented
            }),
        })
            .then(r => r.json())
            .then((rentedMovie) => onRentMovie(rentedMovie))
    }

    return (
        <div className="container">
            <h3>Rented Videos List</h3>
            <ul>
                {filteredMovies.map((movie) => 
                    <div className="rented-lists" key={movie.id}> 
                        <li>{movie.title}</li>
                        <button name="rented" onClick={() => handleRent(movie)}> Return Video</button>
                    </div>
                    
                )}
            </ul>
        </div>
    )
}

export default RentedVideos;