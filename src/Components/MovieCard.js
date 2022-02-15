import React from 'react';

function MovieCard({ movie, onRentMovie, onDeleteMovie }) {
    function handleRent() {
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

    function handleDelete() {
        fetch(`http://localhost:9292/movies/${movie.id}`, {
            method: "DELETE",
        })
            .then(r => r.json())
            .then((deletedMovie) => onDeleteMovie(deletedMovie))
    }

    return (
        <div className={movie.rented ? 'greyed-lists' : 'lists'}>
            <li key={movie.id}>{movie.title}</li>
            <button name="rented" onClick={handleRent}>{movie.rented ? 'Unavailable' : 'Rent'}</button>
            <button name="delete" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default MovieCard;